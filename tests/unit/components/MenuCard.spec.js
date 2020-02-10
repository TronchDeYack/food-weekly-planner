import MenuCard from '@/components/MenuCard.vue';

import { createComponent } from '../../utils';

describe('MenuCard', () => {
  const propsData = {
    id: 'ID',
    title: 'TITLE',
    minutes: 30,
    caloriesIndicator: 'high',
    hasEgg: true,
    hasMeat: false,
    hasFish: true,
    isVegetarian: false,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = createComponent(MenuCard, propsData);
  });
  it('Should render.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should redirect to recipe details when clicking on the card.', () => {
    expect(wrapper.find('v-card-stub').attributes('to')).toEqual(`/recipes/${propsData.id}`);
  });
});
