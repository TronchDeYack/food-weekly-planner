import { shallowMount } from '@vue/test-utils';

import CaloriesLevelStep from '@/components/add-recipe/CaloriesLevelStep.vue';
import { ADD_RECIPE_TOGGLE_CALORIES_LEVEL } from '@/store/mutations';

const caloriesLevel = [
  {
    value: 'VALUE-1',
    selected: false,
  },
  {
    value: 'VALUE-2',
    selected: false,
  },
  {
    value: 'VALUE-3',
    selected: false,
  },
];

function getMockedStore() {
  return {
    commit: jest.fn(),
    state: {
      AddRecipe: {
        caloriesLevel,
      },
    },
  };
}

function createComponentInstance(propsData) {
  const $store = getMockedStore();
  return shallowMount(CaloriesLevelStep, {
    propsData,
    mocks: {
      $store,
    },
  });
}

describe('CaloriesLevelStep', () => {
  const propsData = {
    title: 'EAT ME',
    step: 2,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = createComponentInstance(propsData);
  });

  describe('render', () => {
    it('Should render.', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    describe('toggleCaloriesLevel', () => {
      it('Should save the selected calories level into the store when clicking on a calories level chip.', () => {
        wrapper.findAll('v-chip-stub').at(1).trigger('click');

        expect(wrapper.vm.$store.commit.mock.calls[0][0]).toEqual(ADD_RECIPE_TOGGLE_CALORIES_LEVEL, caloriesLevel[1]);
      });
    });
  });
});
