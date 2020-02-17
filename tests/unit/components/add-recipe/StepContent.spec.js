import { shallowMount } from '@vue/test-utils';

import StepContent from '@/components/add-recipe/StepContent.vue';

describe('StepContent', () => {
  const propsData = {
    step: 2,
  };

  describe('render', () => {
    it('Should render.', () => {
      const wrapper = shallowMount(StepContent, { propsData });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
