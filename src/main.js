import Vue from 'vue';

import vuetify from '@/plugins/vuetify';
import i18n from '@/plugins/i18n';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import '@/assets/style/global.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app');
