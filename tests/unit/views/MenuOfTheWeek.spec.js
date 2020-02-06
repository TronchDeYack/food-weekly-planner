import MenuOfTheWeek from '@/views/MenuOfTheWeek.vue';

import { createComponent } from '../../utils';

describe('MenuOfTheWeek', () => {
  it('Should render.', () => {
    const component = createComponent(MenuOfTheWeek);
    expect(component).toMatchSnapshot();
  });
});
