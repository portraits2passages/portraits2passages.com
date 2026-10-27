# Inventaire — portraits2passages.com

*Relevé le 25/10/2026, en lecture seule (sitemap.xml + HTML public). Rien n'a été modifié sur le site.*

## 1. Vue d'ensemble

| Élément | Constat |
|---|---|
| Domaine | `portraits2passages.com` (`www.` redirige en 301), serveur Apache Infomaniak |
| Outil | Infomaniak Site Creator ; images sur `storage4.infomaniak.com`, polices via `fonts.bunny.net`, monitoring Sentry d'Infomaniak |
| Langue | Français uniquement (`lang="fr"`), **pas de multilingue** |
| Pages | **15** : 5 pages fixes + 10 « éditions » (récits de voyage) |
| Volume de texte | ~11 700 mots au total (~9 700 dans les éditions) |
| Images | ~65 images au total (≈4 par édition + bandeaux/portraits) |
| robots.txt | `Crawl-delay: 10`, aucun blocage |

### Navigation (en-tête)
Logo « Portraits 2 Passages » · Accueil · Éditions · Formations · Contact · **recherche** intégrée.

### Pied de page (identique partout)
« Menu principal » (Accueil, Éditions, Formations, Contact) · « Légal » (Mentions légales) · « Copyright, tous droits réservés » · liens sociaux : Instagram, Facebook, YouTube (@portraits2passages), LinkedIn · `mailto:contact@portraits2passages.com`.

### Bandeau cookies
Bandeau de consentement Site Creator (Nécessaire / Statistiques / Marketing). Aucun outil de statistiques tiers détecté (pas de Google Analytics/Matomo) : il ne sert qu'à bloquer les intégrations YouTube et uMap.

## 2. Pages

| # | URL | Titre (H1/H2) | Rôle | Sections | Mots | Images | Fonctions particulières |
|---|---|---|---|---|---|---|---|
| 1 | `/` | Portraits 2 Passages | Accueil | Notre mission · Formations et accompagnements (+ lien « Plus d'infos ») · Les dernières vidéos (3 dernières éditions) · Qui sommes-nous ? (3 portraits : Nicolas, Lou, Diane) | ~500 | 9 | Liste auto des 3 dernières éditions |
| 2 | `/editions` | Les éditions P2P | Liste des récits | Cartes (titre, résumé, vignette) | ~360 | 8 | **Pagination** (6 par page, `?p=1_3&pid=2`) |
| 3 | `/formations` | Nos formations | Offre de formation | Systèmes Terre · Numérique responsable · Sécurité informatique · Formulaire | ~200 | 6 | **Formulaire** : nom, e-mail, 5 cases d'intérêt, message, captcha |
| 4 | `/contact` | Contact | Contact | Formulaire de contact | ~90 | 3 | **Formulaire** : nom, e-mail, objet, message, captcha |
| 5 | `/mentions-legales` | Mentions légales | Légal / RGPD | Éditeur, hébergeur, données, RGPD, PI, responsabilité, cookies, consentement, contact | ~850 | 2 | Lien de retrait du consentement cookies |
| 6–15 | `/editions/<slug>` | Voir tableau 3 | Récit d'une édition | Intro + encadré « Pour cette édition » · **La vidéo** · **La carte des trajets** · **Les défis** (accordéons question/réponse) · commentaires | 740–1 220 | 4 | **YouTube** + **carte uMap** (OpenStreetMap) intégrés, **accordéons**, **commentaires** avec captcha (aucun commentaire publié), date de publication |

### 3. Les 10 éditions (modèle identique)

| Slug | Titre | Date | Vidéo YouTube | Carte uMap |
|---|---|---|---|---|
| la-mayenne-en-stop-sans-argent-avec-nos-patrons | La Mayenne en stop sans argent avec nos patrons | 08/08/2025 | 6PuoFzwOu2U | p2p-010 |
| lucerne-en-route-pour-le-coeur-de-la-suisse | Lucerne : en route pour le cœur de la Suisse | 2024 | DXMQegIoV5c | p2p-009 |
| l-indre-les-agat-d-iau-le-berrichon-la-brenne | L'Indre : les Agat d'iau, le berrichon, la Brenne | 2024 | VX_xqSr-as8 | p2p-008 |
| tout-doux-dans-le-doubs | Tout doux dans le Doubs | 2022 | jm2TGt58o9E | p2p-007 |
| jura-petanque-et-secheresse | Jura : pétanque et sécheresse | 07/2022 | 50CVZ3fD4HQ | p2p-006 |
| canicule-en-haute-saone | Canicule en Haute-Saône | 07/2022 | EXLRsaITrt8 | p2p-005 |
| haute-savoie-entre-lacs-et-montagnes | Haute-Savoie : entre lacs et montagnes | 2022 | lHQJWM0SzBY | p2p-004 |
| la-meuse-de-haut-en-bas | La Meuse de haut en bas | 2022 | YGMGhpdtd8I | p2p-003 |
| le-gers-l-hiver-le-stop-l-aventure | Le Gers, l'hiver, le stop, l'aventure ! | 02/2022 | ajU7JHlmANA | p2p-002 |
| la-haute-marne-en-automne | La Haute-Marne en automne | 31/10/2021 | Q1Y7ekxagGA | p2p-001 |

*(Dates relevées sur les pages : 31/10/2021, 11/02/2022, 27/04/2022, 01/07/2022, 18 et 21/07/2022, 25/07/2022, 18 et 26/07/2024, 08/08/2025 ; l'attribution exacte par page reste à confirmer lors de l'export.)*

Le texte des éditions mentionne un **fichier de défis téléchargeable**, mais aucun lien de téléchargement (PDF, etc.) n'a été trouvé dans le HTML : lien manquant ou cassé, à vérifier dans l'éditeur.

## 4. SEO

- **Titres** : bon schéma `<Page> — Récits de voyage et formations engagées | Portraits 2 Passages`.
- **Meta descriptions** : uniques et pertinentes pour les éditions ; **identiques** pour les 5 pages fixes (même texte que l'accueil), à améliorer.
- **Hiérarchie de titres** : accueil, formations et mentions sans H1 ; éditions avec **deux H1** (« Les éditions P2P » + le titre).
- `canonical` présent partout ; **Open Graph** : seulement `og:image` sur les éditions, et c'est la même image générique (`miniature.png`) ; aucun `og:title` ni `og:description`.
- Sitemap : pas de `lastmod`, `changefreq=daily` et `priority=1` partout (valeurs par défaut sans intérêt).
- Pas de données structurées (schema.org).

→ Une migration permettrait de corriger tout cela facilement.

## 5. Recommandation de stack

**Astro (site statique) + CMS basé sur Git + hébergement statique ; domaine et e-mails conservés chez Infomaniak.**

- **Astro** : les éditions deviennent une *content collection* en Markdown (frontmatter : titre, date, résumé, vignette, `youtubeId`, `umapUrl`, liste des défis question/réponse). Un seul gabarit génère les 10 pages, la liste paginée et le bloc « 3 dernières vidéos ». Claude Code pourra modifier le contenu et le design directement dans le dépôt.
- **Back-office** : **Pages CMS** (le plus simple, gratuit, il suffit d'un compte GitHub, idéal pour des collections Markdown) ; **Decap CMS** comme alternative éprouvée ; TinaCMS est plus puissant (édition visuelle), mais demande plus de configuration et un service cloud. Recommandation : **Pages CMS**.
- **Hébergement** : Cloudflare Pages, Netlify ou GitHub Pages (gratuits à ce volume). Possible aussi sur un hébergement web Infomaniak existant (dépôt des fichiers par FTP ou SSH), si l'offre en inclut un.
- **Formulaires** (contact + formations) : Netlify Forms, Formspree, Web3Forms ou Basin (offres gratuites suffisantes), avec anti-spam par honeypot ou Cloudflare Turnstile.
- **Commentaires** : aucun n'a été publié, donc **suppression recommandée** (sinon Giscus ou Remark42).
- **Recherche** : Pagefind (statique, gratuit) si on veut la garder ; avec 15 pages, on peut aussi s'en passer.
- **YouTube / uMap** : intégrations conservées, en mode `youtube-nocookie` ou avec une façade « cliquer pour charger ». Sans traceurs, le bandeau cookies peut disparaître.
- **Redirections** : garder exactement les mêmes URL (`/editions/<slug>`, etc.) : aucune redirection n'est nécessaire, à part l'ancienne pagination.

## 6. Estimation de l'effort de migration

Site petit et très homogène, donc migration **simple**.

| Tâche | Effort |
|---|---|
| Récupérer textes et images (script sur le HTML public + téléchargement depuis storage4) | 0,5 j |
| Squelette Astro, mise en page, en-tête/pied, reprise du design | 1–1,5 j |
| Gabarit « édition » (vidéo, carte, accordéon des défis) + conversion des 10 éditions en Markdown | 1 j |
| Pages fixes, formulaires, SEO (meta, OG, sitemap, H1) | 0,5 j |
| Configuration Pages CMS + hébergement + bascule DNS (MX/e-mails inchangés) | 0,5 j |
| Recette et corrections | 0,5 j |
| **Total** | **≈ 4 à 4,5 jours** de travail assisté, à étaler sur 1 à 2 semaines |

**Points à vérifier avant décision** : offre et facture Infomaniak (Site Creator inclus ou non ; hébergement web disponible ?) ; fichiers « défis » téléchargeables ; destinataires actuels des formulaires ; accès aux images en pleine résolution.

**Coûts récurrents visés** : 0 € d'hébergement (Cloudflare Pages/Netlify) + le domaine et les e-mails chez Infomaniak.
