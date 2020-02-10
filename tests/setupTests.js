import VueTestUtils from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
// Required for Vuetify
const app = document.createElement('div');
app.setAttribute('data-app', 'true');
document.body.appendChild(app);

VueTestUtils.config.mocks = {
  $t: arg => arg,
  $router: {
    push: jest.fn(),
    go: jest.fn(),
  },
};

VueTestUtils.config.stubs = {
  'router-link': true,
};
