import { shallowMount } from '@vue/test-utils';

import CaloriesLevelStep from '@/components/add-recipe/CaloriesLevelStep.vue';

describe('CaloriesLevelStep', () => {
  const propsData = {
    title: 'EAT ME',
    step: 2,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CaloriesLevelStep, { propsData });
  });

  describe('render', () => {
    it('Should render.', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('state', () => {
    it('Should initialize "caloriesLabel" to an array.', () => {
      expect(wrapper.vm.$data.caloriesLabel).toEqual(['Low', 'Medium', 'High']);
    });
  });
});
