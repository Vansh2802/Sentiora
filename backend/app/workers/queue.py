from redis import Redis
from rq import Queue

from app.api.deps import get_settings

DEFAULT_QUEUE_NAME = "sentiora.default"


def create_redis_connection() -> Redis:
    settings = get_settings()
    return Redis.from_url(settings.redis_url)


def create_queues(connection: Redis | None = None) -> list[Queue]:
    redis_connection = connection or create_redis_connection()
    return [Queue(DEFAULT_QUEUE_NAME, connection=redis_connection)]
