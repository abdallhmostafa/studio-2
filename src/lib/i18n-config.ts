export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'fr', 'de'], // English, Spanish, French, German
} as const;

export type Locale = (typeof i18n)['locales'][number];
