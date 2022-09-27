export const languages = [
  {
    key: 'en-gb',
    name: 'English (GB)',
  },
  {
    key: 'en-us',
    name: 'English (US)',
  },
];

export const defaultLanguage = languages.find((language) => language.key === 'en-us');
