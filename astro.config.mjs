import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://portraits2passages.com',
  // Mêmes URL que le site actuel (/editions, /contact…) : pas de slash final.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
