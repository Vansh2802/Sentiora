# Sentiora

Sentiora is a memory-oriented application repository with a locked phase-based implementation plan, shared design assets, and canonical engineering documentation.

## Repository Structure

- `docs/` canonical engineering documents and documentation index
- `Design/` Figma exports, screenshots, tokens, icons, and brand references
- `frontend/` React + Vite + TypeScript web application scaffold
- `backend/` FastAPI modular monolith scaffold and RQ worker entrypoint
- `extension/` Manifest V3 Chrome extension scaffold
- `shared/` shared TypeScript types, constants, and utilities
- `infrastructure/` deployment and environment assets
- `scripts/` repository automation helpers
- `tests/` cross-cutting validation assets

## Implementation Phases

1. **Repository Preparation**: documentation and canonical repository setup
2. **Phase 0**: Environment & Foundations
3. **Phase 1**: Authentication
4. **Phase 2**: Chrome Extension Skeleton
5. **Phase 3**: Capture Pipeline
6. **Phase 4**: Backend Core APIs
7. **Phase 5**: Frontend Dashboard
8. **Phase 6**: Search
9. **Phase 7**: AI / RAG Chat
10. **Phase 8**: Testing
11. **Phase 9**: Deployment & Launch

## Documentation

- [docs/01_PRD_v2.1_FINAL.pdf](docs/01_PRD_v2.1_FINAL.pdf)
- [docs/02_SRS_v1.0.pdf](docs/02_SRS_v1.0.pdf)
- [docs/03_Backend_Technical_Specification_v1.2.pdf](docs/03_Backend_Technical_Specification_v1.2.pdf)
- [docs/04_Technical_Specification_v1.2.pdf](docs/04_Technical_Specification_v1.2.pdf)
- [docs/05_API_Specification_v1.0.pdf](docs/05_API_Specification_v1.0.pdf)
- [docs/06_Database_Schema_Design_v1.2.pdf](docs/06_Database_Schema_Design_v1.2.pdf)
- [docs/07_Development_Implementation_Plan.pdf](docs/07_Development_Implementation_Plan.pdf)
- [docs/08_UIUX_Specification_v1.0_FINAL.pdf](docs/08_UIUX_Specification_v1.0_FINAL.pdf)
- [docs/TASKS.md](docs/TASKS.md)
- [docs/PROMPT_GUIDE.md](docs/PROMPT_GUIDE.md)

## Developer Prerequisites

- Node.js
- Python 3.12
- Docker Desktop with Docker Compose

## Environment Setup

1. Copy `.env.example` to `.env` at the repository root.
2. Copy `backend/.env.example`, `frontend/.env.example`, and `extension/.env.example` when you need local overrides.
3. Install dependencies with `npm install` at the repository root.
4. Install Python development dependencies for the backend with `pip install -e ./backend[dev]`.

## Local Development

### Official Backend Development Workflow

To start the backend with the Docker-first environment:

1. Start database, cache, and pgAdmin containers:
   ```bash
   docker compose up -d
   ```
2. Apply database migrations using Alembic:
   ```bash
   cd backend
   alembic upgrade head
   ```
3. Start the FastAPI development server:
   ```bash
   uvicorn app.main:app --reload
   ```

### Other Services

- Frontend dev server: `npm run dev:frontend`
- Extension watch build: `npm run dev:extension`
- Shared package typecheck: `npm run dev:shared`
- Backend worker: `npm run dev:worker`
- View Database Client (pgAdmin): Access `http://localhost:5050` (Login: `admin@sentiora.ai` / Password: `admin`)

## Health Endpoint

- Backend health check: `GET /health`

The endpoint returns the standard success envelope with `success`, `data`, and `meta` fields.
