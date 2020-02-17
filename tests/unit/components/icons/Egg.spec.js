import { shallowMount } from '@vue/test-utils';

import Egg from '@/components/icons/Egg.vue';

describe('Egg', () => {
  it('Should render.', () => {
    const component = shallowMount(Egg, {
      propsData: {
        disabled: false,
      },
    });
    expect(component).toMatchSnapshot();
  });
});
