import Egg from '@/components/icons/Egg.vue';

import { createComponent } from '../../../utils';

describe('Egg', () => {
  it('Should render.', () => {
    const component = createComponent(Egg, {
      propsData: {
        disabled: false,
      },
    });
    expect(component).toMatchSnapshot();
  });
});
