import { getCollection } from 'astro:content';
import type { Lang } from './i18n';

// Éditions d'une langue, de la plus récente à la plus ancienne.
export async function getEditions(lang: Lang) {
  const liste = lang === 'fr' ? await getCollection('editions') : await getCollection('editionsEn');
  return liste.sort((a, b) => +b.data.date - +a.data.date);
}
