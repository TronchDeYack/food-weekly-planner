import AddRecipe from '@/views/AddRecipe.vue';
import { getIngredients } from '@/api';

import { createComponent } from '../../utils';

jest.mock('@/api');
describe('AddRecipe', () => {
  const ingredients = [
    {
      id: 'PATE-ID',
      label: 'Pâtes',
      unit: 'GR',
      type: 'STARCHY-FOOD',
    },
    {
      id: 'SAUCE-TOMATE-ID',
      label: 'Sauce Tomate',
      unit: 'GR',
      type: 'CONDIMENT',
    },
    {
      id: 'STEAK-ID',
      label: 'Steak haché',
      unit: 'GR',
      type: 'MEAT',
    },
  ];

  let wrapper;

  beforeEach(() => {
    getIngredients.mockResolvedValue(ingredients);
    wrapper = createComponent(AddRecipe);
  });

  it('Should render.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('state', () => {
    it('Should initialize "currentStep" to 1.', () => {
      wrapper = createComponent(AddRecipe);
      expect(wrapper.vm.$data.currentStep).toEqual(1);
    });

    it('Should initialize "ingredients" to an empty array.', () => {
      wrapper = createComponent(AddRecipe);
      expect(wrapper.vm.$data.ingredients).toEqual([]);
    });
  });

  describe('mounted', () => {
    it('Should get ingredients data from API and store them in "ingredients" state.', () => {
      expect(wrapper.vm.$data.ingredients).toEqual(ingredients);
    });
  });
});
