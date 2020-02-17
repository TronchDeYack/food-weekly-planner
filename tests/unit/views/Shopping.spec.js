import { shallowMount } from '@vue/test-utils';

import Shopping from '@/views/Shopping.vue';
import { getShoppingList } from '@/api';

jest.mock('@/api');

describe('Shopping', () => {
  let wrapper;

  const ingredientsToShopping = [
    {
      id: 'BREAD-ID',
      label: 'Pain',
      quantity: 1,
      unit: 'unit',
      type: 'STARCHY-FOOD',
      bought: false,
    },
    {
      id: 'CHEDDAR-ID',
      label: 'Cheddar',
      quantity: 400,
      unit: 'GR',
      type: 'DAIRY-PRODUCT',
      bought: true,
    },
    {
      id: 'MILK-ID',
      label: 'Lait',
      quantity: 1,
      unit: 'L',
      type: 'DAIRY-PRODUCT',
      bought: false,
    },
    {
      id: 'BEER-ID',
      label: 'Bière brune',
      quantity: 25,
      unit: 'CL',
      type: 'OTHER',
      bought: false,
    },
    {
      id: 'HAM-ID',
      label: 'Jambon',
      quantity: 100,
      unit: 'GR',
      type: 'MEAT',
      bought: true,
    },
    {
      id: 'CHICKEN-ID',
      label: 'Piou piou',
      quantity: 200,
      unit: 'GR',
      type: 'MEAT',
      bought: true,
    },
  ];

  beforeEach(() => {
    getShoppingList.mockResolvedValue(ingredientsToShopping);
    wrapper = shallowMount(Shopping);
  });

  it('Should render.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('state', () => {
    it('Should initialize "ingredients" state to an empty array.', () => {
      wrapper = shallowMount(Shopping);
      expect(wrapper.vm.$data.ingredients).toEqual([]);
    });
  });

  describe('mounted', () => {
    it('Should get ingredients data from API and store them in "ingredients" state.', () => {
      expect(wrapper.vm.$data.ingredients).toEqual(ingredientsToShopping);
    });
  });

  describe('computed', () => {
    it('Should organize the ingredients by type.', () => {
      const expectedOrganizedIngredients = [
        {
          type: 'STARCHY-FOOD',
          ingredients: [
            {
              id: 'BREAD-ID',
              label: 'Pain (1)',
              bought: false,
            },
          ],
          nbrBought: 0,
          nbrToBuy: 1,
        },
        {
          type: 'DAIRY-PRODUCT',
          ingredients: [
            {
              id: 'CHEDDAR-ID',
              label: 'Cheddar (400 GR)',
              bought: true,
            },
            {
              id: 'MILK-ID',
              label: 'Lait (1 L)',
              bought: false,
            },
          ],
          nbrBought: 1,
          nbrToBuy: 2,
        },
        {
          type: 'OTHER',
          ingredients: [
            {
              id: 'BEER-ID',
              label: 'Bière brune (25 CL)',
              bought: false,
            },
          ],
          nbrBought: 0,
          nbrToBuy: 1,
        },
        {
          type: 'MEAT',
          ingredients: [
            {
              id: 'HAM-ID',
              label: 'Jambon (100 GR)',
              bought: true,
            },
            {
              id: 'CHICKEN-ID',
              label: 'Piou piou (200 GR)',
              bought: true,
            },
          ],
          nbrBought: 2,
          nbrToBuy: 2,
        },
      ];

      expect(wrapper.vm.shoppingCategories).toEqual(expectedOrganizedIngredients);
    });
  });

  describe('methods', () => {
    describe('getCategoryHeader', () => {
      it('Should return the type with the remaining ingredients number to buy and the total ingredients number.', () => {
        const category = {
          type: 'DAIRY-PRODUCT',
          ingredients: [
            {
              id: 'CHEDDAR-ID',
              label: 'Cheddar (400 GR)',
              bought: true,
            },
            {
              id: 'MILK-ID',
              label: 'Lait (1 L)',
              bought: false,
            },
          ],
          nbrBought: 1,
          nbrToBuy: 2,
        };

        const expectedHeader = 'DAIRY-PRODUCT (1/2)';

        expect(wrapper.vm.getCategoryHeader(category)).toEqual(expectedHeader);
      });
    });

    describe('toggleIngredient', () => {
      it('Should update "bought" property to true when checking the ingredient.', () => {
        wrapper.vm.toggleIngredient(ingredientsToShopping[2].id);

        expect(wrapper.vm.$data.ingredients[2].bought).toBe(true);
      });

      it('Should update "bought" property to false when unchecking the ingredient.', () => {
        wrapper.vm.toggleIngredient(ingredientsToShopping[1].id);

        expect(wrapper.vm.$data.ingredients[1].bought).toBe(false);
      });
    });
  });
});
