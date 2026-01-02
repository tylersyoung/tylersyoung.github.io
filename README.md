# tyleryoung.dev

A minimal personal website and blog. Inspired by [near.blog](https://near.blog/) and [karpathy.github.io](https://karpathy.github.io/).

## Stack

- [Astro](https://astro.build) — static site generation
- Markdown — content
- Plain CSS — styling

Zero JavaScript shipped to the browser.

## Running locally

```bash
npm install
npm run dev
```

## Adding content

**Blog post** — create `src/content/blog/post-name.md`:

```markdown
---
title: "Post Title"
description: "Brief description"
date: 2025-01-15
tags: ["topic"]
---

Content here...
```

**Project** — create `src/content/projects/project-name.md`:

```markdown
---
title: "Project Name"
description: "What it does"
date: 2025-01-15
tags: ["tech"]
link: "https://live-site.com"
github: "https://github.com/you/repo"
featured: true
---

Details here...
```

## Deploying

```bash
npm run build
```

Upload `dist/` to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).
