# Sentiora Figma Reference

This folder contains the design reference material for Sentiora MVP implementation.

Use it together with the product documentation in `/Docs`, the exported assets, and the screenshot flow guide in [SCREENSHOT_FLOW.md](SCREENSHOT_FLOW.md).

## What’s In This Folder

- [FIGMA_LINK.md](FIGMA_LINK.md) for the canonical Figma design URL.
- [SCREENSHOT_FLOW.md](SCREENSHOT_FLOW.md) for the intended order and purpose of the screenshots.
- `DesignTokens/` for colors, typography, spacing, radius, shadows, and component tokens.
- `ExportedAssets/` for illustrations, images, logos, and other exported visuals.
- `Fonts/` for any self-hosted project fonts.
- `Icons/` for reusable SVG icon assets.
- `Screenshots/` for feature-grouped reference screenshots.

## Source Of Truth

1. Figma design
2. Design tokens
3. Exported assets
4. Screenshot references
5. Product documentation in `/Docs`

## Implementation Rules

- Follow the Figma design as the visual source of truth.
- Follow the documents in `/Docs` as the functional source of truth.
- Treat screenshots inside each folder as an ordered flow.
- Reuse components instead of recreating similar UI.
- Use the design tokens for spacing, typography, colors, shadows, and radius.
- Prefer exported assets and icons over recreating graphics.
- Do not invent new layouts, navigation, or components unless required.

If any design detail is unclear, stop and confirm before making assumptions.
