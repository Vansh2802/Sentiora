import uuid
from typing import Annotated

from fastapi import APIRouter, Depends, Request, status

from app.api.deps import get_current_user
from app.models.user import User
from app.schemas.envelope import ResponseMeta

router = APIRouter(prefix="/users", tags=["Users"])


def _meta(request: Request) -> ResponseMeta:
    request_id = getattr(request.state, "request_id", f"req_{uuid.uuid4().hex[:8]}")
    return ResponseMeta(request_id=request_id)


@router.get(
    "/me",
    status_code=status.HTTP_200_OK,
    summary="Get full profile of the currently authenticated user",
)
def get_user_profile(
    request: Request,
    current_user: Annotated[User, Depends(get_current_user)],
) -> dict:
    profile_data = None
    if current_user.profile:
        profile_data = {
            "display_name": current_user.profile.display_name,
            "avatar_url": current_user.profile.avatar_url,
            "bio": current_user.profile.bio,
            "timezone": current_user.profile.timezone,
            "locale": current_user.profile.locale,
        }

    return {
        "success": True,
        "data": {
            "id": str(current_user.id),
            "email": current_user.email,
            "is_email_verified": current_user.is_email_verified,
            "is_active": current_user.is_active,
            "profile": profile_data,
        },
        "meta": _meta(request).model_dump(),
    }
