// Lien externe saisi dans le CMS : seul https:// est accepté, sinon le lien n'est pas affiché.
export const lienSur = (url?: string) => (url && /^https:\/\//.test(url) ? url : undefined);
