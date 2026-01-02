import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// GitHub Pages configuration
// If deploying to username.github.io (user page), set base to ''
// If deploying to username.github.io/repo-name (project page), set base to '/repo-name'
const REPO_NAME = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Website';
const BASE = REPO_NAME.includes('.github.io') ? '' : `/${REPO_NAME}`;

export default defineConfig({
  base: BASE,
  site: process.env.SITE_URL || `https://tyleryoung.github.io${BASE}`,
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});

