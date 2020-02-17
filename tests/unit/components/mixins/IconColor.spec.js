import { shallowMount } from '@vue/test-utils';

import IconColor from '@/components/mixins/IconColor.vue';

describe('IconColor', () => {
  let component;
  const fakeComponent = {
    name: 'fake-component',
    template: '<div />',
  };

  it('Should return disabled class when the given "disabled" prop is set to true.', () => {
    component = shallowMount(fakeComponent, {
      propsData: { disabled: true },
      mixins: [IconColor],
    }).vm;

    expect(component.getIconClass()).toEqual('icon-disabled');
  });

  it('Should return enable class when the given "disabled" prop is set to false.', () => {
    component = shallowMount(fakeComponent, {
      propsData: { disabled: false },
      mixins: [IconColor],
    }).vm;

    expect(component.getIconClass()).toEqual('');
  });
});
