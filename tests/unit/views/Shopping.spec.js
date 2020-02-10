import Shopping from '@/views/Shopping.vue';

import { createComponent } from '../../utils';

describe('Shopping', () => {
  it('Should render.', () => {
    const component = createComponent(Shopping);
    expect(component).toMatchSnapshot();
  });
});
