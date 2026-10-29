import { getCollection } from 'astro:content';
import site from '../data/site.json';
import accueil from '../data/accueil.json';
import formations from '../data/formations.json';
import { routes, editionUrl } from '../i18n';

// Résumé du site pour les assistants IA (convention llms.txt), généré à partir du contenu.
export async function GET({ site: base }: { site: URL }) {
  const abs = (p: string) => new URL(p, base).href;
  const editions = (await getCollection('editions')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const texte = [
    `# ${site.nom}`,
    '',
    `> ${site.description}`,
    '',
    accueil.mission,
    '',
    '## Pages',
    `- [Accueil](${abs(routes.accueil.fr)})`,
    `- [Éditions](${abs(routes.editions.fr)}) : récits de voyage en stop à la découverte d'un territoire, avec défis, vidéo et carte`,
    `- [${formations.titre}](${abs(routes.formations.fr)}) : ${formations.intro}`,
    `- [Contact](${abs(routes.contact.fr)})`,
    `- [English version](${abs(routes.accueil.en)})`,
    '',
    '## Éditions',
    ...editions.map(e => `- [${e.data.titre}](${abs(editionUrl('fr', e.id))}) (${e.data.date.toISOString().slice(0, 7)}) : ${e.data.chapo}`),
    '',
  ].join('\n');
  return new Response(texte, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
