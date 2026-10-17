import { defineConfig } from 'astro/config';
// SITE_BASE / SITE_URL are set by the GitHub Pages workflow; local dev and preview use the root path.
export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
