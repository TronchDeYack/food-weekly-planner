import { shallowMount } from '@vue/test-utils';

import StepActions from '@/components/add-recipe/StepActions.vue';
import { ADD_RECIPE_NEXT_STEP, ADD_RECIPE_PREVIOUS_STEP } from '@/store/mutations';

function getMockedStore() {
  return {
    commit: jest.fn(),
    state: {
      AddRecipe: {
        currentStep: 1,
      },
    },
  };
}

function createComponentInstance() {
  const $store = getMockedStore();
  return shallowMount(StepActions, {
    mocks: {
      $store,
    },
  });
}

describe('StepActions', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createComponentInstance();
  });

  describe('render', () => {
    it('Should render.', () => {
      expect(shallowMount(StepActions)).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    describe('nextStep', () => {
      it('Should commit "ADD_RECIPE_NEXT_STEP" mutation when clicking on continue button.', () => {
        wrapper.find('.continue-btn').trigger('click');

        expect(wrapper.vm.$store.commit.mock.calls[0][0]).toEqual(ADD_RECIPE_NEXT_STEP);
      });
    });

    describe('previousStep', () => {
      it('Should commit "ADD_RECIPE_PREVIOUS_STEP" mutation when clicking on cancel button.', () => {
        wrapper.find('.cancel-btn').trigger('click');

        expect(wrapper.vm.$store.commit.mock.calls[0][0]).toEqual(ADD_RECIPE_PREVIOUS_STEP);
      });
    });
  });
});
