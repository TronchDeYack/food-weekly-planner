import { shallowMount } from '@vue/test-utils';

import StepTitle from '@/components/add-recipe/StepTitle.vue';

function getMockedStore(currentStep) {
  return {
    state: {
      AddRecipe: {
        currentStep,
      },
    },
  };
}

function createComponentInstance(propsData, currentStep) {
  const $store = getMockedStore(currentStep);
  return shallowMount(StepTitle, {
    propsData,
    mocks: {
      $store,
    },
  });
}

describe('StepTitle', () => {
  const propsData = {
    step: 2,
    title: 'DUQ',
  };

  describe('render', () => {
    it('Should render.', () => {
      const wrapper = createComponentInstance(propsData, 1);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('computed', () => {
    it('Should display the icon "complete" when we are in a next step.', () => {
      const wrapper = createComponentInstance(propsData, 4);
      expect(wrapper.vm.complete).toBe(true);
    });

    it('Should hide the icon "complete" when we are in a previous step.', () => {
      const wrapper = createComponentInstance(propsData, 1);
      expect(wrapper.vm.complete).toBe(false);
    });

    it('Should hide the icon "complete" when we are in the current step.', () => {
      const wrapper = createComponentInstance(propsData, 2);
      expect(wrapper.vm.complete).toBe(false);
    });
  });
});
