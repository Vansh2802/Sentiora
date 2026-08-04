from datetime import UTC, datetime
from uuid import uuid4

from fastapi import APIRouter, Depends

from app.api.deps import get_settings
from app.core.config import Settings
from app.schemas.system import HealthData, HealthResponse, ResponseMeta

router = APIRouter(tags=["health"])


@router.get("/health", response_model=HealthResponse)
async def health(settings: Settings = Depends(get_settings)) -> HealthResponse:
    return HealthResponse(
        success=True,
        data=HealthData(status="ok", service=settings.app_name),
        meta=ResponseMeta(
            request_id=f"req_{uuid4().hex[:8]}",
            timestamp=datetime.now(UTC),
        ),
    )
