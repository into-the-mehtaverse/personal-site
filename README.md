# Personal Site

A minimal, notes-like personal site built with Astro + TypeScript.

## Features

- Minimal JavaScript (React islands only on `/design`)
- Notes-like aesthetic: narrow column, generous line-height, system fonts
- Content collections for blog posts (Markdown with frontmatter)
- Routes: `/`, `/work`, `/design`, `/research`, `/blog`, `/misc`
- Dark mode support (system preference)

## Setup

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:4321` to see the site.

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── InteractiveCanvas.tsx (React component for /design)
│   ├── content/
│   │   ├── config.ts (content collection schema)
│   │   └── blog/ (Markdown blog posts)
│   ├── layouts/
│   │   └── BaseLayout.astro (main layout with nav)
│   └── pages/
│       ├── index.astro (/)
│       ├── work.astro
│       ├── design.astro
│       ├── research.astro
│       ├── misc.astro
│       └── blog/
│           ├── index.astro (blog listing)
│           └── [...slug].astro (individual posts)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Adding Blog Posts

Create new Markdown files in `src/content/blog/` with frontmatter:

```markdown
---
title: Post Title
description: Optional description
pubDate: 2024-01-15
---

Your content here...
```

## Interactive Components

The `/design` page supports React components (Astro islands). The `InteractiveCanvas` component includes cleanup patterns for future canvas/three.js work.
