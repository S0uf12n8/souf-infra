import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the final production domain once it's live.
const SITE_URL = 'https://YOUR-DOMAIN-PLACEHOLDER.example';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  server: { port: 4321 },
  integrations: [sitemap()],
  vite: {
    css: {
      devSourcemap: true
    }
  }
});
