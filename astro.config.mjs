import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://portraits2passages.com',
  // Mêmes URL que le site actuel (/editions, /contact…) : pas de slash final.
  trailingSlash: 'never',
  build: { format: 'file' },
  // Anciennes adresses de la page (site actuel et premières versions de la maquette)
  redirects: { '/formations': '/interventions', '/en/training': '/en/our-work' },
  integrations: [sitemap({ filter: (page) => !page.includes('/merci') })],
});
