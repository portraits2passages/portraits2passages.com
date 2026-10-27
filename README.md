# portraits2passages.com — maquette Astro

Maquette du futur site statique. **Le site en ligne (Infomaniak Site Creator) n'est pas modifié.**

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # site statique dans dist/
```

- Contenu : `src/content/editions/*.md` (une édition = un fichier), `src/data/*.json` (accueil, formations, réglages), `src/content/mentions-legales.md`.
- Images : `public/images/`.
- Back-office : `.pages.yml` (Pages CMS, après dépôt sur GitHub).
- `scripts/extraire.py` : script qui a généré les éditions à partir du HTML du site actuel.
- Voir `inventaire.md` pour l'analyse et l'estimation.

## Reste à faire avant la mise en ligne
- Créer un formulaire Formspree (ou équivalent) et renseigner `formulaireAction` dans `src/data/site.json`.
- Pousser sur GitHub, brancher Cloudflare Pages ou Netlify, puis connecter Pages CMS.
- Basculer le DNS (enregistrements web uniquement : les MX/e-mails restent chez Infomaniak).
