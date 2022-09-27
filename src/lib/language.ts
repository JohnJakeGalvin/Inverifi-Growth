export const getLanguage = () => window.localStorage.getItem('language')?.toLowerCase() || 'en-gb';

export const setLanguage = (language: string) => {
  window.localStorage.setItem('language', language);
  window.location.reload();
};
