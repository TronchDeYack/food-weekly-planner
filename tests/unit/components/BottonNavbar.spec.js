import { shallowMount } from '@vue/test-utils';

import BottomNavbar from '@/components/BottomNavbar.vue';

describe('BottomNavbar', () => {
  it('Should render.', () => {
    const component = shallowMount(BottomNavbar);
    expect(component).toMatchSnapshot();
  });
});
