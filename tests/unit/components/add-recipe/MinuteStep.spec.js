import { shallowMount } from '@vue/test-utils';

import MinuteStep from '@/components/add-recipe/MinuteStep.vue';

describe('MinuteStep', () => {
  const propsData = {
    title: 'EAT ME',
    step: 2,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MinuteStep, { propsData });
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
