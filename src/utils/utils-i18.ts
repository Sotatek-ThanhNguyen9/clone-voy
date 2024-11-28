import moment from 'moment';
import i18n, { supportedLngs } from 'src/i18n';

export const setI18nForMoment = (path: string) => {
  if (path.startsWith('/admin/')) {
    moment.locale(supportedLngs[0]); // EN
  } else {
    moment.locale(i18n.language ?? supportedLngs[0]);
  }
};
