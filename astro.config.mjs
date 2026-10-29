import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeSanitize from 'rehype-sanitize';

export default defineConfig({
  site: 'https://portraits2passages.com',
  // Mêmes URL que le site actuel (/editions, /contact…) : pas de slash final.
  trailingSlash: 'never',
  build: { format: 'file' },
  // Anciennes adresses de la page (site actuel et premières versions de la maquette)
  redirects: { '/formations': '/interventions', '/en/training': '/en/our-work' },
  // Le Markdown saisi dans le CMS est nettoyé : pas de script, d'iframe ni de lien « javascript: ».
  markdown: { rehypePlugins: [rehypeSanitize] },
  integrations: [sitemap({ filter: (page) => !/\/(merci|en\/thank-you)$/.test(page) })],
});
