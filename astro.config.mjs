// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jhontineo.corefk.com',
  integrations: [mdx(), sitemap()],
  output: 'static',
  // Las rutas antiguas siguen funcionando.
  redirects: {
    '/proyect': '/proyectos',
    '/participate': '/logros',
    '/about': '/sobre-mi',
  },
});
