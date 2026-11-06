// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export const SITE_URL = 'https://arbcut.lt';
const PREVIEW = process.env.PUBLIC_PREVIEW === '1';

export default defineConfig({
  site: SITE_URL,
  // Peržiūroje sitemap negeneruojamas (noindex).
  integrations: PREVIEW ? [] : [
    sitemap({
      // noindex teisinius puslapius išskiriame iš sitemap
      filter: (page) => !/\/(privatumo-politika|taisykles|aciu)\/?$/.test(page),
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
