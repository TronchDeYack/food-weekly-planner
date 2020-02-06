import { shallowMount } from '@vue/test-utils';

export function createComponent(component, propsData, mixins = []) {
  return shallowMount(component, {
    mixins,
    propsData,
  });
}
