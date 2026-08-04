import re
from uuid import UUID

from pydantic import BaseModel, ConfigDict, EmailStr, Field, field_validator


class RegisterRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=10)
    full_name: str = Field(min_length=2, max_length=80)

    @field_validator("password")
    @classmethod
    def validate_password(cls, v: str) -> str:
        if not re.search(r"[A-Z]", v):
            raise ValueError("Must contain at least one uppercase letter.")
        if not re.search(r"[0-9]", v):
            raise ValueError("Must contain at least one number.")
        return v


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class RefreshTokenRequest(BaseModel):
    refresh_token: str


class ForgotPasswordRequest(BaseModel):
    email: EmailStr


class ResetPasswordRequest(BaseModel):
    reset_token: str
    new_password: str = Field(min_length=10)

    @field_validator("new_password")
    @classmethod
    def validate_password(cls, v: str) -> str:
        if not re.search(r"[A-Z]", v):
            raise ValueError("Must contain at least one uppercase letter.")
        if not re.search(r"[0-9]", v):
            raise ValueError("Must contain at least one number.")
        return v


class ChangePasswordRequest(BaseModel):
    current_password: str
    new_password: str = Field(min_length=10)

    @field_validator("new_password")
    @classmethod
    def validate_password(cls, v: str) -> str:
        if not re.search(r"[A-Z]", v):
            raise ValueError("Must contain at least one uppercase letter.")
        if not re.search(r"[0-9]", v):
            raise ValueError("Must contain at least one number.")
        return v


class RegisterResponseData(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    user_id: UUID
    email: EmailStr
    email_verified: bool = False


class AuthUserInfo(BaseModel):
    id: UUID
    email: EmailStr
    full_name: str | None = None


class AuthTokenData(BaseModel):
    access_token: str
    refresh_token: str
    access_token_expires_in: int = 900
    user: AuthUserInfo | None = None
