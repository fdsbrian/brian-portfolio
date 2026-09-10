import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const isProjectPage = process.env.GITHUB_ACTIONS === 'true' && repo && !repo.endsWith('.github.io');
export default defineConfig({ site: process.env.SITE_URL || 'https://example.github.io', base: isProjectPage ? `/${repo}` : '/', integrations:[sitemap()] });
