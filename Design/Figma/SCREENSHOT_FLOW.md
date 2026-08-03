# Sentiora Screenshot Flow

## Purpose

This document explains the intended order and purpose of the screenshots contained in this directory.

The screenshots are grouped by feature instead of being individually renamed. Within each folder, the screenshots should be interpreted in chronological order from the beginning of the user journey to the end.

When implementing the UI, always follow this document together with the Figma design and exported assets.

---

# Overall User Journey

Foundation
->
Authentication
->
Onboarding
->
Browser Extension Setup
->
Dashboard

---

# Folder Structure

## Foundation

Contains the project's design system.

Includes:

- Color Palette
- Typography
- Grid
- Spacing
- Components
- Buttons
- Inputs
- Cards
- Icons
- Tokens

These screens are reference material only and should be used to maintain UI consistency.

---

## Auth

Contains the authentication flow.

Typical sequence:

1. Landing Page
2. Sign Up
3. Sign Up Form
4. Login
5. Forgot Password
6. Reset Password
7. Authentication Success

---

## Onboarding

Contains the first-time user experience.

Typical sequence:

1. Welcome Screen
2. Product Introduction
3. Select Memory Sources
4. Connect Accounts
5. Browser Permission
6. Browser Extension Prompt
7. Initial Memory Scan
8. Completion Screen

---

## Extension

Contains the Chrome Extension flow.

Typical sequence:

1. Install Extension
2. Grant Browser Permissions
3. Connect Extension
4. Successful Connection
5. Capture Confirmation

---

## Dashboard

Contains the main application after onboarding.

Typical sequence:

1. Empty State
2. Loading State
3. Dashboard Home
4. Memory Feed
5. Search
6. AI Chat
7. Memory Details
8. Settings
9. Profile

---

# Important Implementation Notes

- Screenshots inside each folder are ordered chronologically.
- File names are timestamp-based and should not be used to determine functionality.
- Use the visual order of the screenshots within each folder.
- Cross-reference every screen with the Figma design whenever possible.
- Reuse components instead of recreating similar UI.
- Follow the Design Tokens for colors, spacing, typography, shadows, and border radius.
- Exported assets and icons should always be preferred over recreating graphics.

---

# Instructions for AI Coding Agents

If you are an AI coding assistant (Cursor, Claude Code, Codex, Gemini CLI, etc.), follow these rules:

1. Treat the screenshots in each folder as an ordered design flow.
2. Implement one screen at a time.
3. Reuse previously built components whenever possible.
4. Preserve spacing, alignment, and typography from the design.
5. Use the project's design tokens.
6. Keep components modular and reusable.
7. Maintain responsive layouts.
8. Do not invent additional UI unless necessary.
9. When information is unclear, prioritize consistency with previous screens.
10. Consider the Figma file as the source of truth.

---

# Sentiora Design Resources

This directory contains all design assets required for implementing the Sentiora MVP.

## Structure

DesignTokens/
Design system tokens including colors, typography, spacing, radius, shadows, and component variables.

ExportedAssets/
Images, illustrations, SVGs, logos, and other exported assets.

Fonts/
Project fonts (if self-hosted).

Icons/
SVG icons and icon assets.

Screenshots/
Reference screenshots grouped by feature.

FIGMA_LINK.md
Official Figma design link.

SCREENSHOT_FLOW.md
Explains the order and purpose of screenshots.

---

## Source of Truth Priority

1. Figma Design
2. Design Tokens
3. Exported Assets
4. Screenshot References

---

## Implementation Rules

- Build reusable components.
- Follow the design system.
- Use semantic HTML.
- Ensure responsiveness.
- Maintain consistent spacing and typography.
- Reuse icons and assets whenever possible.
- Follow the user flow documented in `SCREENSHOT_FLOW.md`.

The Figma file is the canonical source for all UI implementation.
