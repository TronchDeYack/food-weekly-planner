import BottomNavbar from '@/components/BottomNavbar.vue';

import { createComponent } from '../../utils';

describe('BottomNavbar', () => {
  it('Should render.', () => {
    const component = createComponent(BottomNavbar);
    expect(component).toMatchSnapshot();
  });
});
