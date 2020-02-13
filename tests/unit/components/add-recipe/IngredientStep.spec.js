import IngredientStep from '@/components/add-recipe/IngredientStep.vue';

import { createComponent } from '../../../utils';

describe('IngredientStep', () => {
  let wrapper;

  const currentStep = 2;

  const propsData = {
    title: 'EAT ME',
    step: currentStep,
    complete: false,
    ingredientType: 'CONDIMENT',
    ingredients: [
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
      {
        id: 'OIL-ID',
        label: 'Huile d\'olives',
        unit: 'CAC',
        type: 'CONDIMENT',
      },
      {
        id: 'TOMATE-ID',
        label: 'Tomates',
        unit: 'UNIT',
        type: 'VEGETABLE',
      },
      {
        id: 'SALT-ID',
        label: 'Sel',
        unit: 'CAC',
        type: 'CONDIMENT',
      },
      {
        id: 'BREAD-ID',
        label: 'Pain',
        unit: 'SLICE',
        type: 'STARCHY-FOOD',
      },
    ],
  };

  beforeEach(() => {
    wrapper = createComponent(IngredientStep, propsData);
  });

  describe('render', () => {
    it('Should render.', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Should display as many chips as filtered ingredients.', () => {
      const filteredIngredients = [
        {
          id: 'SAUCE-TOMATE-ID',
          label: 'Sauce Tomate',
          unit: 'GR',
          type: 'CONDIMENT',
        },
        {
          id: 'OIL-ID',
          label: 'Huile d\'olives',
          unit: 'CAC',
          type: 'CONDIMENT',
        },
        {
          id: 'SALT-ID',
          label: 'Sel',
          unit: 'CAC',
          type: 'CONDIMENT',
        },
      ];

      expect(wrapper.findAll('v-chip-stub')).toHaveLength(filteredIngredients.length);
      filteredIngredients.forEach((ingredient, index) => {
        expect(wrapper.findAll('v-chip-stub').at(index).text()).toEqual(ingredient.label);
      });
    });
  });

  describe('computed', () => {
    it('Should return only filtered ingredients by the given type.', () => {
      const expectedIngredients = [
        {
          id: 'SAUCE-TOMATE-ID',
          label: 'Sauce Tomate',
          unit: 'GR',
          type: 'CONDIMENT',
        },
        {
          id: 'OIL-ID',
          label: 'Huile d\'olives',
          unit: 'CAC',
          type: 'CONDIMENT',
        },
        {
          id: 'SALT-ID',
          label: 'Sel',
          unit: 'CAC',
          type: 'CONDIMENT',
        },
      ];

      expect(wrapper.vm.filteredIngredients).toEqual(expectedIngredients);
    });
  });
});
