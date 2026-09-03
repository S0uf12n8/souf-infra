import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the final production domain once it's live.
const SITE_URL = 'https://YOUR-DOMAIN-PLACEHOLDER.example';

// Injected at build start so the footer's "last deployed" timestamp is the
// actual build time, not a hardcoded string that goes stale.
process.env.BUILD_TIME = new Date().toISOString();

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  server: { port: 4321 },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/404'),
  })],
  vite: {
    css: {
      devSourcemap: true
    }
  }
});
