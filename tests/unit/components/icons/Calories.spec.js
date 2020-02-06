import Calories from '@/components/icons/Calories.vue';

import { createComponent } from '../../../utils';

describe('Calories', () => {
  it('Should render.', () => {
    const component = createComponent(Calories);
    expect(component).toMatchSnapshot();
  });
});
