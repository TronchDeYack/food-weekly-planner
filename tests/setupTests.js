import VueTestUtils from '@vue/test-utils';

VueTestUtils.config.mocks = {
  $t: arg => arg,
  $router: {
    push: jest.fn(),
    go: jest.fn(),
  },
};

VueTestUtils.config.stubs = {
  'router-link': true,
  'v-bottom-navigation': true,
  'v-app-bar': true,
  'v-btn': true,
  'v-card': true,
  'v-card-text': true,
  'v-card-title': true,
  'v-chip': true,
  'v-chip-group': true,
  'v-col': true,
  'v-container': true,
  'v-divider': true,
  'v-icon': true,
  'v-row': true,
  'v-toolbar-title': true,
};
