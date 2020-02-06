import Vegetable from '@/components/icons/Vegetable.vue';

import { createComponent } from '../../../utils';

describe('Vegetable', () => {
  it('Should render.', () => {
    const component = createComponent(Vegetable, {
      propsData: {
        disabled: false,
      },
    });
    expect(component).toMatchSnapshot();
  });
});
