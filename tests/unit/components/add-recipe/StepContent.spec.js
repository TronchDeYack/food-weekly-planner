import StepContent from '@/components/add-recipe/StepContent.vue';

import { createComponent } from '../../../utils';

describe('StepContent', () => {
  const propsData = {
    step: 2,
  };

  describe('render', () => {
    it('Should render.', () => {
      const wrapper = createComponent(StepContent, propsData);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
