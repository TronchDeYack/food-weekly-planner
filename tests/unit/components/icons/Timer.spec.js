import Timer from '@/components/icons/Timer.vue';

import { createComponent } from '../../../utils';

describe('Timer', () => {
  it('Should render.', () => {
    const component = createComponent(Timer);
    expect(component).toMatchSnapshot();
  });
});
