import { shallowMount } from '@vue/test-utils';

import Header from '@/components/Header.vue';

describe('Header', () => {
  it('Should render.', () => {
    const component = shallowMount(Header);
    expect(component).toMatchSnapshot();
  });
});
