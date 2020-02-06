import MenuCard from '@/components/MenuCard.vue';

import { createComponent } from '../../utils';

describe('MenuCard', () => {
  it('Should render.', () => {
    const propsData = {
      title: 'TITLE',
      minutes: 30,
      caloriesIndicator: 'high',
      hasEgg: true,
      hasMeat: false,
      hasFish: true,
      isVegetarian: false,
    }
    const component = createComponent(MenuCard, propsData);
    expect(component).toMatchSnapshot();
  });
});
