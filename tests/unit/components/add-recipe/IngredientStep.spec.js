import { shallowMount } from '@vue/test-utils';

import IngredientStep from '@/components/add-recipe/IngredientStep.vue';
import { ADD_RECIPE_TOGGLE_INGREDIENT } from '@/store/mutations';

const ingredientType = 'CONDIMENT';

function getMockedStore() {
  return {
    commit: jest.fn(),
    state: {
      AddRecipe: {
        currentStep: 2,
        ingredients: [
          {
            id: 'PATE-ID',
            label: 'Pâtes',
            unit: 'GR',
            type: 'STARCHY-FOOD',
            selected: true,
          },
          {
            id: 'OIL-ID',
            label: 'Huile d\'olives',
            unit: 'CAC',
            type: 'CONDIMENT',
            selected: false,
          },
          {
            id: 'TOMATE-ID',
            label: 'Tomates',
            unit: 'UNIT',
            type: 'VEGETABLE',
            selected: true,
          },
          {
            id: 'SALT-ID',
            label: 'Sel',
            unit: 'CAC',
            type: 'CONDIMENT',
            selected: true,
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
              selected: false,
            },
            {
              id: 'OIL-ID',
              label: 'Huile d\'olives',
              unit: 'CAC',
              type: 'CONDIMENT',
              selected: false,
            },
            {
              id: 'SALT-ID',
              label: 'Sel',
              unit: 'CAC',
              type: 'CONDIMENT',
              selected: true,
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

  describe('methods', () => {
    describe('toggleIngredients', () => {
      it('Should select an ingredient by calling "ADD_RECIPE_TOGGLE_INGREDIENT" mutation with the selected ingredient ID when clicking on an unselected ingredient chip.', () => {
        wrapper.findAll('v-chip-stub').at(1).trigger('click');

        expect(wrapper.vm.$store.commit.mock.calls[0][0]).toEqual(ADD_RECIPE_TOGGLE_INGREDIENT, {
          ingredientId: 'OIL-ID',
          selected: true,
        });
      });

      it('Should unselect an ingredient by calling "ADD_RECIPE_TOGGLE_INGREDIENT" mutation with the selected ingredient ID when clicking on a selected ingredient chip.', () => {
        wrapper.findAll('v-chip-stub').at(2).trigger('click');

        expect(wrapper.vm.$store.commit.mock.calls[0][0]).toEqual(ADD_RECIPE_TOGGLE_INGREDIENT, {
          ingredientId: 'SALT-ID',
          selected: true,
        });
      });
    });
  });
});
