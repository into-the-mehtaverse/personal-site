# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
pnpm install        # Install dependencies
pnpm dev            # Dev server at http://localhost:4321
pnpm build          # Production build to dist/
pnpm preview        # Preview production build locally
```

## Architecture

Astro 5 static site (personal portfolio) with TypeScript. Minimal JavaScript — React is only used as an Astro island on the `/design` page.

**Routing:** File-based via `src/pages/`. Routes: `/`, `/work`, `/design`, `/research`, `/blog`, `/misc`. Blog posts use dynamic `[...slug].astro` route.

**Content collections:** Blog posts are Markdown files in `src/content/blog/` with Zod-validated frontmatter (`title`, `description?`, `pubDate`, `updatedDate?`). Schema defined in `src/content/config.ts`.

**Layout:** Single `BaseLayout.astro` wraps all pages. Handles nav, dark mode toggle, global styles, and theme persistence via localStorage.

**Styling:** No CSS framework. CSS custom properties defined in `BaseLayout.astro` for theming (light/dark mode). Narrow column layout (`max-width: 42rem`), system fonts.

**Custom Mermaid plugin:** `src/plugins/rehype-mermaid.mjs` transforms mermaid code blocks for browser-side rendering. Configured in `astro.config.mjs` as a rehype plugin.

**Path alias:** `@/*` maps to `./src/*` (configured in `tsconfig.json`).
