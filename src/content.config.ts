import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Champs saisis dans le CMS : on n'accepte que des valeurs sûres (pas de lien « javascript: », pas d'iframe arbitraire).
const image = z.string().regex(/^\/images\/[\w.\-]+$/, 'Image du dossier /images/ attendue');

const schema = z.object({
  titre: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  chapo: z.string(),
  couverture: image,
  youtube: z.string().regex(/^[\w-]{11}$/, 'Identifiant YouTube de 11 caractères attendu'),
  carte: z.string().regex(/^https:\/\/umap\.openstreetmap\.fr\/[\w\/.\-]+$/, 'Lien uMap (https://umap.openstreetmap.fr/…) attendu'),
  carteTexte: z.string().optional(),
  defis: z.array(z.object({
    nom: z.string(), question: z.string(), reponse: z.string(),
    image: image.optional(), imageAlt: z.string().optional(),
  })).default([]),
});

// Une collection par langue ; une édition traduite garde le même nom de fichier.
const editions = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/editions' }), schema });
const editionsEn = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/editions-en' }), schema });

export const collections = { editions, editionsEn };
