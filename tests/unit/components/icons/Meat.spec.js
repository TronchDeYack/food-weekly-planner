import { shallowMount } from '@vue/test-utils';

import Meat from '@/components/icons/Meat.vue';

describe('Meat', () => {
  it('Should render.', () => {
    const component = shallowMount(Meat);
    expect(component).toMatchSnapshot();
  });
});
