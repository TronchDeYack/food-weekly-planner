import Meat from '@/components/icons/Meat.vue';

import { createComponent } from '../../../utils';

describe('Meat', () => {
  it('Should render.', () => {
    const component = createComponent(Meat);
    expect(component).toMatchSnapshot();
  });
});
