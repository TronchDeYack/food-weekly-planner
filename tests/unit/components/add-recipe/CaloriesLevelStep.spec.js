import CaloriesLevelStep from '@/components/add-recipe/CaloriesLevelStep.vue';

import { createComponent } from '../../../utils';

describe('CaloriesLevelStep', () => {
  const propsData = {
    title: 'EAT ME',
    step: 2,
    complete: false,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = createComponent(CaloriesLevelStep, propsData);
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
