import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const schema = z.object({
  titre: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  chapo: z.string(),
  couverture: z.string(),
  youtube: z.string(),
  carte: z.string().url(),
  carteTexte: z.string().optional(),
  defis: z.array(z.object({ nom: z.string(), question: z.string(), reponse: z.string() })).default([]),
});

// Une collection par langue ; une édition traduite garde le même nom de fichier.
const editions = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/editions' }), schema });
const editionsEn = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/editions-en' }), schema });

export const collections = { editions, editionsEn };
