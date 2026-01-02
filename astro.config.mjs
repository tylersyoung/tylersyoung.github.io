import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Custom domain configuration
// Update this to your custom domain
const CUSTOM_DOMAIN = 'tylersyoung.com';

export default defineConfig({
  base: '', // Empty base for custom domain at root
  site: `https://${CUSTOM_DOMAIN}`,
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});

