# Sentiora Tasks & Progress Tracker

## 1. Project Overview
* **Brief description of Sentiora**: A memory-oriented application that seamlessly captures and indexes user content (webpages, PDFs, YouTube) for semantic search and AI-driven retrieval.
* **Product vision**: To provide users with a private, intelligent, and context-aware second brain that securely stores and retrieves their digital footprint.
* **MVP objective**: Deliver an end-to-end loop where a user can authenticate, capture content via a Chrome extension, view it on a web dashboard, and perform semantic search and RAG-based chat with citations, deployed to a production environment.

---

## 2. Current Development Status

| Phase | Status | Completion | Notes |
| ----- | ------ | ---------- | ----- |
| Phase 0: Environment & Foundations | ✅ Completed | 100% | Scaffolding, Docker, CI skeleton, DB config |
| Phase 1: Authentication | ✅ Completed | 100% | Backend endpoints, frontend flow, DB schema for users |
| Phase 2: Chrome Extension Skeleton | ✅ Completed | 100% | Manifest V3, popup shell, permission model skeleton |
| Phase 3: Capture Pipeline | 🟡 In Progress | 10% | Meaningful Capture Engine content scripts started |
| Phase 4: Backend Core APIs | ⏳ Planned | 0% | Memory CRUD APIs, ingestion, storage integration |
| Phase 5: Frontend Dashboard | ⏳ Planned | 0% | Memory Timeline UI, filters, item detail view |
| Phase 6: Search | ⏳ Planned | 0% | Embeddings, pgvector semantic search, Search UI |
| Phase 7: AI / RAG Chat | ⏳ Planned | 0% | LangChain pipeline, citations, chat UI |
| Phase 8: Testing | ⏳ Planned | 0% | E2E, unit/integration, security, performance |
| Phase 9: Deployment & Launch | ⏳ Planned | 0% | Staging/Prod environments, monitoring, Web Store |

---

## 3. Completed Work

**Repository**
* Monorepo folder structure established (`frontend/`, `backend/`, `extension/`, `shared/`)
* Docker and `docker-compose.yml` configured for Postgres, Redis, MinIO
* Environment files (`.env.example`) defined
* Core project documentation added (`docs/`, `AGENTS.md`)
* CI pipeline (`.github/workflows/ci.yml`) defined

**Backend**
* FastAPI initialized with structured modules (`api`, `core`, `models`, `schemas`, `services`)
* PostgreSQL and Alembic integrated
* Initial migrations created
* Authentication endpoints (`/auth/register`, `/auth/login`, `/auth/refresh`) implemented
* JWT middleware configured

**Frontend**
* Vite + React + TypeScript initialized
* Tailwind CSS configured
* Authentication UI (`Login.tsx`, `SignUp.tsx`, `DashboardHome.tsx`) developed
* Auth Context and routing structure built

**Chrome Extension**
* Manifest V3 skeleton established
* Basic Vite config setup
* Initial boilerplate for popup, content scripts, and background worker

---

## 4. Current Phase

* **Current active phase**: Phase 3 (Capture Pipeline) & Phase 4 (Backend Core APIs)
* **Current objectives**: Implement the Meaningful Capture Engine and the backend APIs required to store captured items.
* **Current deliverables**: 
  * Content scripts for webpage, PDF, and YouTube capture
  * Sensitive-content exclusion logic
  * Backend Memory CRUD APIs and ingestion endpoints
* **Current blockers**: None
* **Current branch**: `main` (Feature branches to be created per feature)

---

## 5. Upcoming Tasks

| Priority | Task | Estimated Complexity | Dependencies | Expected Output |
| -------- | ---- | -------------------- | ------------ | --------------- |
| P0 | Implement extension content script for webpage capture | High | Phase 2 | Content script captures DOM text and metadata |
| P0 | Build Memory CRUD APIs in backend | Medium | Phase 1 | `/memory-items` endpoints available |
| P0 | Implement sensitive-content exclusion rules | Medium | None | Secure client-side filter logic |
| P1 | Setup Celery ingestion worker | High | Backend APIs | Async job processes incoming capture requests |
| P1 | Implement Storage integration (MinIO/S3) | Medium | Backend APIs | Files (PDFs/snapshots) stored and linked in DB |

---

## 6. Completed Milestones

* **Milestone 1 (Foundations & Auth)**: Repository scaffolding complete. Team can run backend, frontend, and extension locally. User authentication works end-to-end. Extension skeleton compiles and loads successfully.

---

## 7. Future Roadmap

* **Post-MVP**: 
  * Footprint module (Identity mapping)
  * Shield module (Risk detection/recommendations)
  * Port to Firefox & Edge Extensions
  * Mobile App
  * Team Collaboration / Shared Memory
  * Real-time Monitoring & Alerts

---

## 8. Notes

* **Architectural decisions**: Using a Monorepo with a Python FastAPI backend and React frontend/extension. State management is split between Zustand (frontend) and Chrome storage (extension). Background tasks run via Celery.
* **Known limitations**: Currently focused strictly on MVP scope. Post-MVP features like Footprint are explicitly excluded for now to maintain velocity.
* **Technical debt**: None currently recorded.

---

## 9. Rules

> [!IMPORTANT]  
> This document **must** be updated after every completed phase. It serves as the single source of truth for engineering progress. Do not start a new phase without ensuring this document accurately reflects the current status.
