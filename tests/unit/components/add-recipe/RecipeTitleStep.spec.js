import { shallowMount } from '@vue/test-utils';

import RecipeTitleStep from '@/components/add-recipe/RecipeTitleStep.vue';

describe('RecipeTitleStep', () => {
  const propsData = {
    title: 'EAT ME',
    step: 2,
  };

  describe('render', () => {
    it('Should render.', () => {
      const wrapper = shallowMount(RecipeTitleStep, { propsData });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
