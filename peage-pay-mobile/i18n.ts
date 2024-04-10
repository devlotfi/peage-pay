import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './translations/en.json';
import FR from './translations/fr.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: EN,
      },
      fr: {
        translation: FR,
      },
    },
    lng: 'en',
    debug: true,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
