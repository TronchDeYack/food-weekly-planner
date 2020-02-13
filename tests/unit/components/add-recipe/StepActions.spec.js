import StepActions from '@/components/add-recipe/StepActions.vue';

import { createComponent } from '../../../utils';

describe('StepActions', () => {
  let wrapper;

  const currentStep = 2;

  const propsData = {
    step: currentStep,
  };

  beforeEach(() => {
    wrapper = createComponent(StepActions, propsData);
  });

  describe('render', () => {
    it('Should render.', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    describe('nextStep', () => {
      it('Should emit a "next-step" event with the next step value when clicking on continue button.', () => {
        const expectedContent = { step: currentStep + 1 };
        wrapper.find('.continue-btn').trigger('click');

        expect(wrapper.emitted()['next-step'][0]).toEqual([expectedContent]);
      });
    });

    describe('previousStep', () => {
      it('Should emit a "previous-step" event with the previous step value when clicking on cancel button.', () => {
        const expectedContent = { step: currentStep - 1 };
        wrapper.find('.cancel-btn').trigger('click');

        expect(wrapper.emitted()['previous-step'][0]).toEqual([expectedContent]);
      });
    });
  });
});
