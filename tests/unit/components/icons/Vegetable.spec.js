import { shallowMount } from '@vue/test-utils';

import Vegetable from '@/components/icons/Vegetable.vue';

describe('Vegetable', () => {
  it('Should render.', () => {
    const component = shallowMount(Vegetable, {
      propsData: {
        disabled: false,
      },
    });
    expect(component).toMatchSnapshot();
  });
});
