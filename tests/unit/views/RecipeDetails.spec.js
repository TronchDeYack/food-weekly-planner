import RecipeDetails from '@/views/RecipeDetails.vue';

import { createComponent } from '../../utils';

describe('RecipeDetails', () => {
  it('Should render.', () => {
    const component = createComponent(RecipeDetails);
    expect(component).toMatchSnapshot();
  });
});
