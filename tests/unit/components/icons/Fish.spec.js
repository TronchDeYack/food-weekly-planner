import { shallowMount } from '@vue/test-utils';

import Fish from '@/components/icons/Fish.vue';

describe('Fish', () => {
  it('Should render.', () => {
    const component = shallowMount(Fish, {
      propsData: {
        disabled: false,
      },
    });
    expect(component).toMatchSnapshot();
  });
});
