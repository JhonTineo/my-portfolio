// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
<<<<<<< HEAD
=======
  output: 'server',
>>>>>>> f6553e79e4fbcebd28d110289dab97081b1a74a7
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
});