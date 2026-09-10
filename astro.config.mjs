import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fdsbrian.github.io',
  base: '/brian-portfolio',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
