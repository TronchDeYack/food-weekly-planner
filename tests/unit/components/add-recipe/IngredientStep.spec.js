import { shallowMount } from '@vue/test-utils';

import IngredientStep from '@/components/add-recipe/IngredientStep.vue';

const ingredientType = 'CONDIMENT';

function getMockedStore() {
  return {
    state: {
      AddRecipe: {
        currentStep: 2,
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
      },
    },
    getters: {
      filteredIngredients: (type) => {
        if (type === ingredientType) {
          return [
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
        }
        return [];
      },
    },
  };
}

function createComponentInstance(propsData) {
  const $store = getMockedStore();
  return shallowMount(IngredientStep, {
    propsData,
    mocks: {
      $store,
    },
  });
}

describe('IngredientStep', () => {
  let wrapper;

  const propsData = {
    title: 'EAT ME',
    step: 2,
    ingredientType: 'CONDIMENT',
  };

  beforeEach(() => {
    wrapper = createComponentInstance(propsData);
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
});
