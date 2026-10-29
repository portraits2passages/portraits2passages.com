import accueilFr from './accueil.json';
import accueilEn from './accueil.en.json';
import formationsFr from './formations.json';
import formationsEn from './formations.en.json';
import type { Lang } from '../i18n';

export const accueil = (lang: Lang) => (lang === 'fr' ? accueilFr : accueilEn);
export const formations = (lang: Lang) => (lang === 'fr' ? formationsFr : formationsEn);
