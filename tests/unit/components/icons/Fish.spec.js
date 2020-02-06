import Fish from '@/components/icons/Fish.vue';

import { createComponent } from '../../../utils';

describe('Fish', () => {
  it('Should render.', () => {
    const component = createComponent(Fish, {
      propsData: {
        disabled: false,
      },
    });
    expect(component).toMatchSnapshot();
  });
});
