from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field


class HealthData(BaseModel):
    status: Literal["ok"] = "ok"
    service: str = Field(min_length=1)


class ResponseMeta(BaseModel):
    request_id: str = Field(min_length=1)
    timestamp: datetime


class HealthResponse(BaseModel):
    success: Literal[True] = True
    data: HealthData
    meta: ResponseMeta
