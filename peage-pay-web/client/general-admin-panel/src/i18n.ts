import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import EN from './translations/en.json';
import FR from './translations/fr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'fr',
    debug: true,
    resources: {
      en: {
        translation: EN,
      },
      fr: {
        translation: FR,
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
