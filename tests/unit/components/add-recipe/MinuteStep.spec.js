import { shallowMount } from '@vue/test-utils';

import MinuteStep from '@/components/add-recipe/MinuteStep.vue';
import { ADD_RECIPE_TOGGLE_MINUTES } from '@/store/mutations';

const minutes = [
  {
    value: '10',
    selected: false,
  },
  {
    value: '15',
    selected: false,
  },
  {
    value: '20',
    selected: false,
  },
];

function getMockedStore() {
  return {
    commit: jest.fn(),
    state: {
      AddRecipe: {
        minutes,
      },
    },
  };
}

function createComponentInstance(propsData) {
  const $store = getMockedStore();
  return shallowMount(MinuteStep, {
    propsData,
    mocks: {
      $store,
    },
  });
}

describe('MinuteStep', () => {
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
    it('Should save the minutes into the store when clicking on a minute chip.', () => {
      wrapper.findAll('v-chip-stub').at(1).trigger('click');

      expect(wrapper.vm.$store.commit.mock.calls[0][0]).toEqual(ADD_RECIPE_TOGGLE_MINUTES, minutes[1]);
    });
  });
});
