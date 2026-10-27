import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const editions = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/editions' }),
  schema: z.object({
    titre: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    chapo: z.string(),
    couverture: z.string(),
    youtube: z.string(),
    carte: z.string().url(),
    carteTexte: z.string().optional(),
    defis: z.array(z.object({ nom: z.string(), question: z.string(), reponse: z.string() })).default([]),
  }),
});

export const collections = { editions };
