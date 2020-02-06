import Pig from '@/components/icons/Pig.vue';

import { createComponent } from '../../../utils';

describe('Pig', () => {
  it('Should render.', () => {
    const component = createComponent(Pig);
    expect(component).toMatchSnapshot();
  });
});
