import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Obtenez le contexte de base de votre application (utile pour GitHub Pages)
const basePath = process.env.PUBLIC_URL || '';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['FR', 'EN', 'ES'],
    fallbackLng: 'FR',
    detection: {
      order: ['cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: `${basePath}/locales/{{lng}}/translation.json`,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
