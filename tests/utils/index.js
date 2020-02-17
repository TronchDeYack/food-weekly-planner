import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';

export function createAppStore(storeConfig) {
  const LocalVue = createLocalVue();
  LocalVue.use(Vuex);
  const store = new Vuex.Store(storeConfig);
  return new LocalVue({ store });
}
