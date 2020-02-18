import { shallowMount } from '@vue/test-utils';

import AddRecipe from '@/views/AddRecipe.vue';
import { getIngredients } from '@/api';
import { ADD_RECIPE_REINITIALIZE } from '@/store/mutations';
import { ADD_RECIPE_GET_INGREDIENTS } from '@/store/actions';

jest.mock('@/api');

function getMockedStore() {
  return {
    commit: jest.fn(),
    dispatch: jest.fn(),
    state: {
      AddRecipe: {
        currentStep: 2,
        ingredients: [],
      },
    },
  };
}

function createComponentInstance() {
  const $store = getMockedStore();
  return shallowMount(AddRecipe, {
    mocks: {
      $store,
    },
  });
}

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
    wrapper = createComponentInstance(AddRecipe);
  });

  it('Should render.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mounted', () => {
    it('Should reinitialize form data.', () => {
      wrapper = createComponentInstance(AddRecipe);

      expect(wrapper.vm.$store.commit.mock.calls[0][0]).toEqual(ADD_RECIPE_REINITIALIZE);
    });

    it('Should dispatch "ADD_RECIPE_GET_INGREDIENTS".', () => {
      expect(wrapper.vm.$store.dispatch.mock.calls[0][0])
        .toEqual(ADD_RECIPE_GET_INGREDIENTS);
    });
  });
});
