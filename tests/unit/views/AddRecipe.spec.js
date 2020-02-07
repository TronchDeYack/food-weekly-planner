import AddRecipe from '@/views/AddRecipe.vue';

import { createComponent } from '../../utils';

describe('AddRecipe', () => {
  it('Should render.', () => {
    const component = createComponent(AddRecipe);
    expect(component).toMatchSnapshot();
  });
});
