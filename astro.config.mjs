// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // TODO: reemplazar por el dominio real donde se publica el portafolio.
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
  // Las rutas antiguas siguen funcionando.
  redirects: {
    '/proyect': '/proyectos',
    '/participate': '/logros',
    '/about': '/sobre-mi',
  },
});
