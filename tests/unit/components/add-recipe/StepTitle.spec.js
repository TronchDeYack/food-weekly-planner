import StepTitle from '@/components/add-recipe/StepTitle.vue';

import { createComponent } from '../../../utils';

describe('StepTitle', () => {
  const propsData = {
    step: 2,
    complete: true,
    title: 'DUQ',
  };

  describe('render', () => {
    it('Should render.', () => {
      const wrapper = createComponent(StepTitle, propsData);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
