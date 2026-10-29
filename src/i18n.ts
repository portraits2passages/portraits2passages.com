export type Lang = 'fr' | 'en';

// Adresses de chaque page dans les deux langues (sert au sélecteur de langue et aux liens hreflang).
export const routes = {
  accueil: { fr: '/', en: '/en' },
  editions: { fr: '/editions', en: '/en/editions' },
  formations: { fr: '/interventions', en: '/en/our-work' },
  contact: { fr: '/contact', en: '/en/contact' },
  mentions: { fr: '/mentions-legales', en: '/en/legal-notice' },
  merci: { fr: '/merci', en: '/en/thank-you' },
} as const;
export type Route = keyof typeof routes;

export const editionUrl = (lang: Lang, slug: string) => `${routes.editions[lang]}/${slug}`;

const textes = {
  fr: {
    slogan: 'Récits de voyage et formations engagées',
    description: 'Explorez des territoires méconnus à travers des aventures humaines uniques. Découvrez nos récits de voyage et nos formations pour un numérique sûr et responsable.',
    nav: { accueil: 'Accueil', editions: 'Éditions', formations: 'Interventions', contact: 'Contact' },
    menuPrincipal: 'Menu principal', mentions: 'Mentions légales', suivez: 'Suivez-nous', droits: 'tous droits réservés',
    autreLangue: 'English', autreLangueLabel: 'Read this page in English',
    theme: 'Thème sombre', evitement: 'Aller au contenu', menu: 'Menu',
    voirEditions: 'Découvrir les éditions', lireRecit: 'Lire le récit', formationsTitre: 'Nos interventions', parlonsEn: 'Parlons de votre projet', voirFormations: 'Voir nos interventions',
    dernieresVideos: 'Les dernières vidéos', toutesEditions: 'Toutes les éditions', quiSommesNous: 'Qui sommes-nous ?',
    editionsTitre: 'Les éditions P2P', editionsDescription: "Toutes les éditions de Portraits 2 Passages : des week-ends en stop, sans téléphone, à la découverte de territoires méconnus, en vidéo, en carte et en défis.",
    video: 'La vidéo', videoLire: 'Lire la vidéo :', videoNote: "La vidéo est hébergée par YouTube et ne se charge qu'au clic.",
    carteTitre: 'La carte des trajets', carteLabel: 'Carte des trajets :', aSavoir: 'À savoir :',
    carteInfo: 'vous pouvez interagir avec la carte pour afficher ou cacher les défis ou les trajets. Pensez à cacher la liste des défis si vous souhaitez les réaliser vous-même !',
    defisTitre: 'Les défis', defisIntro: 'Saurez-vous, comme eux, relever ces défis culturels ? Testez vos connaissances sur le département avec les énigmes ci-dessous.',
    imprimer: 'Imprimer les défis (sans les réponses)',
    formationsMeta: 'Conventions citoyennes, ateliers de conception collaborative et formations : Systèmes Terre, numérique responsable (Green IT, communs numériques) et sécurité informatique.',
    formationsCta: 'Un projet, une idée ? Parlons-en !',
    formationsCtaTexte: 'Décrivez-nous votre contexte et vos envies : nous vous proposerons une action ou une formation adaptée.',
    nousContacter: 'Nous contacter',
    contactMeta: "Contactez l'équipe Portraits 2 Passages : participation à une édition, formation, partenariat ou simple question.",
    contactIntro: 'Écrivez-nous via le formulaire ci-dessous : nous vous répondrons dès que possible.',
    form: { nom: 'Nom complet', email: 'E-mail', objet: 'Objet', message: 'Message', envoyer: 'Envoyer le message', sujet: 'Contact depuis le site', obligatoires: 'Les champs marqués d’un astérisque (*) sont obligatoires.' },
    mentionsMeta: 'Mentions légales, hébergement, données personnelles et cookies du site Portraits 2 Passages.',
    merciTitre: 'Merci !', merciMeta: 'Votre message a bien été envoyé.', merciTexte: 'Votre message a bien été envoyé. Nous vous répondrons dès que possible.', retourAccueil: "Retour à l'accueil",
  },
  en: {
    slogan: 'Travel stories and committed training',
    description: 'Explore little-known regions through unique human adventures. Discover our travel stories and our training courses for safe and responsible digital technology.',
    nav: { accueil: 'Home', editions: 'Editions', formations: 'Our work', contact: 'Contact' },
    menuPrincipal: 'Main menu', mentions: 'Legal notice', suivez: 'Follow us', droits: 'all rights reserved',
    autreLangue: 'Français', autreLangueLabel: 'Lire cette page en français',
    theme: 'Dark theme', evitement: 'Skip to content', menu: 'Menu',
    voirEditions: 'Explore the editions', lireRecit: 'Read the story', formationsTitre: 'Our work', parlonsEn: "Let's talk about your project", voirFormations: 'See our work',
    dernieresVideos: 'Latest videos', toutesEditions: 'All editions', quiSommesNous: 'Who are we?',
    editionsTitre: 'P2P editions', editionsDescription: 'Every Portraits 2 Passages edition: phone-free hitchhiking weekends exploring little-known regions, told through videos, maps and challenges.',
    video: 'The video', videoLire: 'Play the video:', videoNote: 'The video is hosted on YouTube and only loads when you click.',
    carteTitre: 'The route map', carteLabel: 'Route map:', aSavoir: 'Good to know:',
    carteInfo: 'you can interact with the map to show or hide the challenges and routes. Hide the list of challenges if you want to try them yourself!',
    defisTitre: 'The challenges', defisIntro: 'Can you take on these cultural challenges like they did? Test your knowledge of the region with the riddles below.',
    imprimer: 'Print the challenges (without answers)',
    formationsMeta: "Citizens' conventions, collaborative design workshops and training: Earth systems, responsible digital technology (Green IT, digital commons) and IT security.",
    formationsCta: "A project or an idea? Let's talk!",
    formationsCtaTexte: "Tell us about your context and what you have in mind: we'll suggest a tailored workshop or course.",
    nousContacter: 'Contact us',
    contactMeta: 'Get in touch with the Portraits 2 Passages team: joining an edition, training, partnerships or any question.',
    contactIntro: "Write to us using the form below and we'll get back to you as soon as possible.",
    form: { nom: 'Full name', email: 'Email', objet: 'Subject', message: 'Message', envoyer: 'Send message', sujet: 'Contact from the website (EN)', obligatoires: 'Fields marked with an asterisk (*) are required.' },
    mentionsMeta: 'Legal notice, hosting, personal data and cookies for the Portraits 2 Passages website.',
    merciTitre: 'Thank you!', merciMeta: 'Your message has been sent.', merciTexte: "Your message has been sent. We'll get back to you as soon as possible.", retourAccueil: 'Back to home',
  },
} as const;

export const t = (lang: Lang) => textes[lang];
