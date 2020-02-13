import MinuteStep from '@/components/add-recipe/MinuteStep.vue';

import { createComponent } from '../../../utils';

describe('MinuteStep', () => {
  const propsData = {
    title: 'EAT ME',
    step: 2,
    complete: false,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = createComponent(MinuteStep, propsData);
  });

  describe('render', () => {
    it('Should render.', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('state', () => {
    it('Should initialize "minutesLabel" to an array.', () => {
      expect(wrapper.vm.$data.minutesLabel).toEqual([
        '5',
        '10',
        '15',
        '30',
        '45',
        '60',
        '+ 60',
      ]);
    });
  });
});
