import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { IconJP, IconUS } from './assets/icons';
import { setI18nForMoment } from './utils/utils-i18';

const languages = {
  en: 'English',
  ja: 'Japanese',
};

const iconLanguages = {
  en: <IconUS />,
  ja: <IconJP />,
};

export const supportedLngs = ['en', 'ja'];

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .use({
    type: 'postProcessor',
    name: 'disableI18nAdmin',
    process: (value: any, key: any, options: any, translator: any) => {
      if (window.location.pathname.startsWith('/admin/')) return key[0];
      return value;
    },
  })
  .init({
    postProcess: ['disableI18nAdmin'],
    // Refer: https://www.i18next.com/overview/configuration-options
    supportedLngs: supportedLngs,
    fallbackLng: supportedLngs[0],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    react: {
      transKeepBasicHtmlNodesFor: ['br'],
    },
  });

//   Change locale moment
i18n.on('languageChanged', (lng) => {
  setI18nForMoment(window.location.pathname);
});

export { iconLanguages, languages };
export default i18n;
