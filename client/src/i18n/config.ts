import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import srTranslation from '../locales/sr.json';
import enTranslation from '../locales/en.json';
import ruTranslation from '../locales/ru.json';

const resources = {
  sr: { translation: srTranslation },
  en: { translation: enTranslation },
  ru: { translation: ruTranslation }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'sr',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;

