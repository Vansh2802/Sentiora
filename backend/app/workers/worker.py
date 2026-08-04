from rq import Worker
from rq.connections import Connection

from app.workers.queue import create_queues, create_redis_connection


def main() -> None:
    connection = create_redis_connection()
    queues = create_queues(connection)
    with Connection(connection):
        worker = Worker(queues)
        worker.work(with_scheduler=False)


if __name__ == "__main__":
    main()
