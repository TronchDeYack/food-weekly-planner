import Vue from 'vue';
import VueI18n from 'vue-i18n';

import frTranslation from '@/locales/fr-FR.json';
import enTranslation from '@/locales/en-US.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'fr-FR',
  messages: {
    'fr-FR': frTranslation,
    'en-US': enTranslation,
  },
});

export default i18n;
