import { shallowMount } from '@vue/test-utils';

import MenuCard from '@/components/MenuCard.vue';

describe('MenuCard', () => {
  const ingredients = [
    {
      id: 'PATE-ID',
      label: 'Pâtes',
      quantity: 200,
      unit: 'gr',
      type: 'STARCHY-FOOD',
    },
    {
      id: 'SAUCE-TOMATE-ID',
      label: 'Sauce Tomate',
      quantity: 200,
      unit: 'GR',
      type: 'CONDIMENT',
    },
  ];

  const propsData = {
    id: 'ID',
    title: 'TITLE',
    minutes: 30,
    caloriesLevel: 'high',
    ingredients,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MenuCard, { propsData });
  });

  it('Should render.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('getRecipeDetailsUrl', () => {
    it('Should redirect to recipe details when clicking on the card.', () => {
      expect(wrapper.find('v-card-stub').attributes('to')).toEqual(`/recipes/${propsData.id}`);
    });
  });

  describe('computed', () => {
    const ingredientsWithMeat = [
      ...ingredients,
      {
        id: 'STEAK-ID',
        label: 'Steak',
        quantity: 100,
        unit: 'GR',
        type: 'MEAT',
      },
    ];
    const propsDataWithMeat = {
      ...propsData,
      ingredients: ingredientsWithMeat,
    };

    const ingredientsWithFish = [
      ...ingredients,
      {
        id: 'SALMON-ID',
        label: 'Saumon',
        quantity: 100,
        unit: 'GR',
        type: 'FISH',
      },
    ];
    const propsDataWithFish = {
      ...propsData,
      ingredients: ingredientsWithFish,
    };

    describe('hasEgg', () => {
      it('Should highlight "egg" icon when there is an egg in the ingredients.', () => {
        const ingredientsWithEgg = [
          ...ingredients,
          {
            id: 'EGG-ID',
            label: 'Oeuf',
            quantity: 2,
            unit: 'unit',
            type: 'EGG',
          },
        ];
        const propsDataWithEgg = {
          ...propsData,
          ingredients: ingredientsWithEgg,
        };

        wrapper = shallowMount(MenuCard, { propsData: propsDataWithEgg });

        expect(wrapper.vm.hasEgg).toBe(true);
      });

      it('Should not highlight "egg" icon when there is no egg in the ingredients.', () => {
        expect(wrapper.vm.hasEgg).toBe(false);
      });
    });

    describe('hasMeat', () => {
      it('Should highlight "meat" icon when there is meat in the ingredients.', () => {
        wrapper = shallowMount(MenuCard, { propsData: propsDataWithMeat });

        expect(wrapper.vm.hasMeat).toBe(true);
      });

      it('Should not highlight "meat" icon when there is no meat in the ingredients.', () => {
        expect(wrapper.vm.hasMeat).toBe(false);
      });
    });

    describe('hasFish', () => {
      it('Should highlight "fish" icon when there is fish in the ingredients.', () => {
        wrapper = shallowMount(MenuCard, { propsData: propsDataWithFish });

        expect(wrapper.vm.hasFish).toBe(true);
      });

      it('Should not highlight "fish" icon when there is no fish in the ingredients.', () => {
        expect(wrapper.vm.hasFish).toBe(false);
      });
    });

    describe('isVegetarian', () => {
      it('Should highlight "vegetarian" icon when there is neither meat nor fish in the ingredients.', () => {
        expect(wrapper.vm.isVegetarian).toBe(true);
      });

      it('Should not highlight "vegetarian" icon when there is fish in the ingredients.', () => {
        wrapper = shallowMount(MenuCard, { propsData: propsDataWithFish });

        expect(wrapper.vm.isVegetarian).toBe(false);
      });

      it('Should not highlight "vegetarian" icon when there is meat in the ingredients.', () => {
        wrapper = shallowMount(MenuCard, { propsData: propsDataWithMeat });

        expect(wrapper.vm.isVegetarian).toBe(false);
      });
    });
  });
});
