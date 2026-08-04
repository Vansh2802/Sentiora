from app.core.config import Settings
from app.core.config import get_settings as get_app_settings


def get_settings() -> Settings:
	return get_app_settings()
