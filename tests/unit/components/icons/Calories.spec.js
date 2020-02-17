import { shallowMount } from '@vue/test-utils';

import Calories from '@/components/icons/Calories.vue';

describe('Calories', () => {
  it('Should render.', () => {
    const component = shallowMount(Calories);
    expect(component).toMatchSnapshot();
  });
});
