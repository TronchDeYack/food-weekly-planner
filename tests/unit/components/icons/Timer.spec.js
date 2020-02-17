import { shallowMount } from '@vue/test-utils';

import Timer from '@/components/icons/Timer.vue';

describe('Timer', () => {
  it('Should render.', () => {
    const component = shallowMount(Timer);
    expect(component).toMatchSnapshot();
  });
});
