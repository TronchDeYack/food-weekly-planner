import Header from '@/components/Header.vue';

import { createComponent } from '../../utils';

describe('Header', () => {
  it('Should render.', () => {
    const component = createComponent(Header);
    expect(component).toMatchSnapshot();
  });
});
