from collections.abc import Generator
from typing import Annotated, Any
from uuid import UUID

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session as DBSession

from app.core.config import Settings
from app.core.config import get_settings as get_app_settings
from app.core.db import get_db_session
from app.core.security import decode_jwt_token
from app.models.user import User
from app.repositories.user_repository import UserRepository


def get_settings() -> Settings:
    return get_app_settings()


def get_db() -> Generator[DBSession, Any, None]:
    yield from get_db_session()


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login", auto_error=True)


def get_current_user(
    token: Annotated[str, Depends(oauth2_scheme)],
    db: Annotated[DBSession, Depends(get_db)],
) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail={
            "code": "AUTH_TOKEN_INVALID",
            "message": "Could not validate credentials.",
        },
    )

    try:
        payload = decode_jwt_token(token)
        if payload.get("type") != "access":
            raise credentials_exception
        user_id_str: str | None = payload.get("sub")
        if not user_id_str:
            raise credentials_exception
        user_id = UUID(user_id_str)
    except Exception:
        raise credentials_exception from None

    user = UserRepository(db).get_by_id(user_id)
    if user is None:
        raise credentials_exception
    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={
                "code": "AUTH_FORBIDDEN",
                "message": "Account is disabled.",
            },
        )
    return user
