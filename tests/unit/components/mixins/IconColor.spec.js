import IconColor from '@/components/mixins/IconColor.vue';
import { createComponent } from '../../../utils';

describe('IconColor', () => {
  let component;
  const fakeComponent = {
    name: 'fake-component',
    template: '<div />',
  };

  it('Should return disabled class when the given "disabled" prop is set to true.', () => {
    component = createComponent(fakeComponent, { disabled: true }, [IconColor]).vm;

    expect(component.getIconClass()).toEqual('icon-disabled');
  });

  it('Should return enable class when the given "disabled" prop is set to false.', () => {
    component = createComponent(fakeComponent, { disabled: false }, [IconColor]).vm;

    expect(component.getIconClass()).toEqual('');
  });
});
