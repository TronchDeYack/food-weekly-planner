import { shallowMount } from '@vue/test-utils';
import { when } from 'jest-when';

import RecipeDetails from '@/views/RecipeDetails.vue';
import { getRecipe } from '@/api';

jest.mock('@/api');

describe('RecipeDetails', () => {
  const recipeId = 'ID-DU-Q';
  const recipe = {
    id: recipeId,
    title: 'Spaghetti bolognaise',
    minutes: 20,
    caloriesLevel: 'medium',
    ingredients: [
      {
        id: 'PATE-ID',
        label: 'Pâtes',
        quantity: 200,
        unit: 'gr',
        type: 'starchy-food',
      },
      {
        id: 'SAUCE-TOMATE-ID',
        label: 'Sauce Tomate',
        quantity: 200,
        unit: 'gr',
        type: 'condiment',
      },
      {
        id: 'STEAK-ID',
        label: 'Steak haché',
        quantity: 100,
        unit: 'gr',
        type: 'meat',
      },
      {
        id: 'OIL-ID',
        label: 'Huile d\'olives',
        quantity: 3,
        unit: 'cac',
        type: 'condiment',
      },
    ],
  };

  const propsData = {
    id: recipeId,
  };

  let component;

  beforeEach(() => {
    when(getRecipe).calledWith(recipeId).mockResolvedValue(recipe);
    component = shallowMount(RecipeDetails, { propsData });
  });

  it('Should render.', () => {
    expect(component).toMatchSnapshot();
  });

  describe('State', () => {
    it('Should initialize "recipe" state to null.', () => {
      const cmp = shallowMount(RecipeDetails, { propsData });
      expect(cmp.vm.$data.recipe).toBeNull();
    });
  });

  describe('mounted', () => {
    it('Should get recipe data from API and store them in "recipe" state.', () => {
      expect(component.vm.$data.recipe).toEqual(recipe);
    });
  });
});
