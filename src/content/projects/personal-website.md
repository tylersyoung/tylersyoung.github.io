---
title: "Personal Website"
description: "A minimal, high-performance blog and portfolio built with Astro."
date: 2025-01-01
tags: ["astro", "typescript", "css"]
link: "https://tylersyoung.github.io"
github: "https://github.com/tylersyoung/website"
featured: true
---
This website serves as my personal blog and project showcase.

## Goals

When building this site, I had a two key objectives:

- The site should load instantly
- Writing new posts should be easy

## Technical Highlights

### Zero JavaScript (by default)

Astro's partial hydration means I only ship JavaScript when absolutely necessary. For a content site like this, that means shipping none at all.

### Content Collections

Astro's content collections feature makes it easy to manage blog posts and projects as Markdown files with type-safe frontmatter.

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});
```

### CSS Custom Properties

Instead of using a CSS framework, I built a simple design system using CSS custom properties. This keeps the codebase lean and gives me full control over the design.

