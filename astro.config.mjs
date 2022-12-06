import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://viveralia.com',
  integrations: [sitemap()],
  adapter: netlify()
})
