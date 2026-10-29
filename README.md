# portraits2passages.com — maquette Astro

Maquette du futur site statique. **Le site en ligne (Infomaniak Site Creator) n'est pas modifié.**

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # site statique dans dist/
```

- Contenu FR : `src/content/editions/*.md`, `src/data/*.json`, `src/content/mentions-legales.md`.
- Contenu EN : `src/content/editions-en/*.md` (même nom de fichier que la version FR), `src/data/*.en.json`, `src/content/mentions-legales.en.md`. Textes d'interface : `src/i18n.ts`.
- Mode sombre : suit le réglage du système, avec un bouton pour forcer clair/sombre (couleurs dans `src/styles/global.css`).
- Images : `public/images/`.
- Back-office : `.pages.yml` (Pages CMS, après dépôt sur GitHub).
- `scripts/extraire.py` : script qui a généré les éditions à partir du HTML du site actuel.

## Reste à faire avant la mise en ligne
- Formulaire de contact : Web3Forms, clé dans `src/data/site.json` (page `/contact` uniquement, retour sur `/merci`).
- Pousser sur GitHub, brancher Cloudflare Pages ou Netlify, puis connecter Pages CMS.
- Basculer le DNS (enregistrements web uniquement : les MX/e-mails restent chez Infomaniak).

## Sécurité
- Site 100 % statique : pas de serveur applicatif, pas de base de données, pas d'interface d'admin sur le site lui-même.
- Le contenu saisi dans Pages CMS est contrôlé au build (`src/content.config.ts`) : images de `/images/` uniquement, identifiant YouTube, carte uMap en https. Le Markdown est nettoyé (`rehype-sanitize`) : pas de script, d'iframe ni de lien `javascript:`. Les liens externes des fichiers JSON doivent être en https (`src/liens.ts`).
- En-têtes HTTP de sécurité : `public/_headers` ; redirections 301 : `public/_redirects`.
- Avant chaque mise en ligne importante : `npm audit` et mise à jour d'Astro.

## Hébergement : Cloudflare Pages
- Projet relié au dépôt GitHub : chaque modification de `main` (y compris depuis Pages CMS) est construite et publiée automatiquement ; chaque pull request obtient une adresse d'aperçu.
- Réglages de construction : commande `npm run build`, dossier `dist`, Node selon `.nvmrc` ; configuration du Worker dans `wrangler.jsonc` (page 404).
- Après le branchement du domaine : désactiver l'adresse `workers.dev` (Settings → Domains & Routes) pour qu'elle ne soit pas indexée.
