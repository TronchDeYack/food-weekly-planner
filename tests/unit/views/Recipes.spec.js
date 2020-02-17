import { shallowMount } from '@vue/test-utils';

import Recipes from '@/views/Recipes.vue';
import { getRecipes } from '@/api';

jest.mock('@/api');

describe('Recipes', () => {
  const recipes = [
    {
      id: 'SOUPE-ID',
      title: 'Soupe à la tomate',
      minutes: 30,
      caloriesLevel: 'low',
      ingredients: [
        {
          id: 'TOMATE-ID',
          label: 'Tomates',
          quantity: 4,
          unit: 'UNIT',
          type: 'VEGETABLE',
        },
        {
          id: 'SALT-ID',
          label: 'Sel',
          quantity: 2,
          unit: 'CAC',
          type: 'CONDIMENT',
        },
      ],
    },
    {
      id: 'WELSH-ID',
      title: 'Welsh',
      minutes: 45,
      caloriesLevel: 'high',
      ingredients: [
        {
          id: 'CHEDDAR-ID',
          label: 'Cheddar',
          quantity: 400,
          unit: 'GR',
          type: 'DAIRY-PRODUCT',
        },
        {
          id: 'BEER-ID',
          label: 'Bière brune',
          quantity: 25,
          unit: 'CL',
          type: 'OTHER',
        },
        {
          id: 'HAM-ID',
          label: 'Jambon',
          quantity: 100,
          unit: 'GR',
          type: 'MEAT',
        },
        {
          id: 'BREAD-ID',
          label: 'Pain',
          quantity: 4,
          unit: 'SLICE',
          type: 'STARCHY-FOOD',
        },
      ],
    },
  ];

  let wrapper;

  beforeEach(() => {
    getRecipes.mockResolvedValue(recipes);
    wrapper = shallowMount(Recipes);
  });

  describe('render', () => {
    it('Should render.', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Should display the menu card with the data of the given recipes.', () => {
      recipes.forEach((recipe, index) => {
        expect(wrapper.findAll('menucard-stub').at(index).props('id')).toEqual(recipe.id);
        expect(wrapper.findAll('menucard-stub').at(index).props('title')).toEqual(recipe.title);
        expect(wrapper.findAll('menucard-stub').at(index).props('caloriesLevel')).toEqual(recipe.caloriesLevel);
        expect(wrapper.findAll('menucard-stub').at(index).props('ingredients')).toEqual(recipe.ingredients);
        expect(wrapper.findAll('menucard-stub').at(index).props('minutes')).toEqual(recipe.minutes);
      });
    });
  });

  describe('State', () => {
    it('Should initialize "recipes" to an empty array.', () => {
      const cmp = shallowMount(Recipes);
      expect(cmp.vm.$data.recipes).toEqual([]);
    });
  });

  describe('mounted', () => {
    it('Should get recipes data from API and store them in "recipes" state.', () => {
      expect(wrapper.vm.$data.recipes).toEqual(recipes);
    });
  });
});
