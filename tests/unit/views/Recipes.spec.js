import Recipes from '@/views/Recipes.vue';

import { createComponent } from '../../utils';

describe('Recipes', () => {
  it('Should render.', () => {
    const component = createComponent(Recipes);
    expect(component).toMatchSnapshot();
  });
});
