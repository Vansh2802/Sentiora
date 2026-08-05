# Sentiora AI Agent Guide

## Mission

Sentiora is a product repository for building a memory-oriented application with supporting engineering documentation, design references, and implementation assets.

## Canonical Documents

AI agents MUST read the documentation in the docs folder before implementing anything.

- 01_PRD_v2.1_FINAL.pdf
- 02_SRS_v1.0.pdf
- 03_Backend_Technical_Specification_v1.2.pdf
- 04_Technical_Specification_v1.2.pdf
- 05_API_Specification_v1.0.pdf
- 06_Database_Schema_Design_v1.2.pdf
- 07_Development_Implementation_Plan.pdf
- 08_UIUX_Specification_v1.0_FINAL.pdf
- TASKS.md
- PROMPT_GUIDE.md

## Development Rules

AI agents must:

- Never skip implementation phases.
- Never mix multiple phases.
- Complete one phase before starting another.
- Follow the Development & Implementation Plan exactly.
- Preserve architectural consistency.
- Never invent APIs not defined in the specifications.
- Never invent database schemas.
- Never ignore security requirements.
- Never remove existing documentation.
- Keep commits focused and atomic.
- Ask for clarification when documentation conflicts.

## Repository Structure

- docs/ - canonical engineering documentation and documentation index
- Design/ - Figma exports, screenshots, tokens, and design references
- frontend/ - reserved for the future frontend application
- backend/ - reserved for the future backend service
- extension/ - reserved for the future extension workstream
- shared/ - reserved for shared code and assets
- scripts/ - reserved for automation and repository scripts
- tests/ - reserved for validation and cross-cutting test assets
- infrastructure/ - reserved for deployment and infrastructure assets

## Coding Standards

- Clean Architecture
- SOLID Principles
- Type Safety
- Consistent Naming
- Reusable Components
- Documentation-first Development
- Security-first Development
- Readable Code
- Minimal Technical Debt

## Phase Workflow

Implementation must always follow:

Repository Preparation

↓

Phase 0

↓

Phase 1

↓

Phase 2

↓

Phase 3

↓

Phase 4

↓

Phase 5

↓

Phase 6

↓

Phase 7

↓

Phase 8

↓

Phase 9

No exceptions.