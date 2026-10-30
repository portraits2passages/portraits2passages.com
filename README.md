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
- Le site est publié automatiquement sur GitHub Pages à chaque envoi sur main ; connecter Pages CMS pour l’édition.
- Basculer le DNS (enregistrements web uniquement : les MX/e-mails restent chez Infomaniak).

## Sécurité
- Site 100 % statique : pas de serveur applicatif, pas de base de données, pas d'interface d'admin sur le site lui-même.
- Le contenu saisi dans Pages CMS est contrôlé au build (`src/content.config.ts`) : images de `/images/` uniquement, identifiant YouTube, carte uMap en https. Le Markdown est nettoyé (`rehype-sanitize`) : pas de script, d'iframe ni de lien `javascript:`. Les liens externes des fichiers JSON doivent être en https (`src/liens.ts`).
- Politique de sécurité (CSP) en balise `<meta>` dans `src/layouts/Base.astro` (GitHub Pages ne permet pas d'en-têtes HTTP) ; anciennes adresses redirigées par les pages générées depuis `redirects` (`astro.config.mjs`).
- Avant chaque mise en ligne importante : `npm audit` et mise à jour d'Astro.

## Hébergement : GitHub Pages
- Le workflow `.github/workflows/deploiement.yml` construit le site et le publie à chaque modification de `main` (y compris depuis Pages CMS).
- Domaine : `portraits2passages.com` (enregistrements DNS chez Infomaniak : 4 A, 4 AAAA vers GitHub, `www` en CNAME vers `portraits2passages.github.io`). La messagerie reste chez Infomaniak.
