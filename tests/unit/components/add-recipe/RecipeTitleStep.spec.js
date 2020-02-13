import RecipeTitleStep from '@/components/add-recipe/RecipeTitleStep.vue';

import { createComponent } from '../../../utils';

describe('RecipeTitleStep', () => {
  const propsData = {
    title: 'EAT ME',
    step: 2,
    complete: false,
  };

  describe('render', () => {
    it('Should render.', () => {
      const wrapper = createComponent(RecipeTitleStep, propsData);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
