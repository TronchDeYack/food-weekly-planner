import AddRecipe from '@/store/modules/add-recipe';
import {
  ADD_RECIPE_NEXT_STEP,
  ADD_RECIPE_PREVIOUS_STEP,
  ADD_RECIPE_SET_INGREDIENTS,
  ADD_RECIPE_TOGGLE_INGREDIENT,
  ADD_RECIPE_REINITIALIZE,
} from '@/store/mutations';
import { createAppStore } from '../../utils';

describe('Add recipe steps store', () => {
  let app;

  const ingredients = [
    {
      id: 'PATE-ID',
      label: 'Pâtes',
      unit: 'GR',
      type: 'STARCHY-FOOD',
      selected: false,
    },
    {
      id: 'SAUCE-TOMATE-ID',
      label: 'Sauce Tomate',
      unit: 'GR',
      type: 'CONDIMENT',
      selected: false,
    },
    {
      id: 'OIL-ID',
      label: 'Huile d\'olives',
      unit: 'CAC',
      type: 'CONDIMENT',
      selected: false,
    },
    {
      id: 'BREAD-ID',
      label: 'Pain',
      unit: 'SLICE',
      type: 'STARCHY-FOOD',
      selected: false,
    },
  ];

  beforeEach(() => {
    const store = {
      modules: {
        AddRecipe,
      },
    };
    app = createAppStore(store);
  });

  describe('State', () => {
    it('Should initialize the current step index to 1.', () => {
      expect(app.$store.state.AddRecipe.currentStep).toBe(1);
    });

    it('Should initialize the ingredients to an empty array.', () => {
      expect(app.$store.state.AddRecipe.ingredients).toEqual([]);
    });
  });

  describe('Getters', () => {
    describe('filteredIngredients', () => {
      it('Should return filtered ingredients by the given type.', () => {
        const expectedIngredients = [
          {
            id: 'PATE-ID',
            label: 'Pâtes',
            unit: 'GR',
            type: 'STARCHY-FOOD',
            selected: false,
          },
          {
            id: 'BREAD-ID',
            label: 'Pain',
            unit: 'SLICE',
            type: 'STARCHY-FOOD',
            selected: false,
          },
        ];

        app.$store.state.AddRecipe.ingredients = [...ingredients];

        expect(app.$store.getters.filteredIngredients('STARCHY-FOOD'))
          .toEqual(expectedIngredients);
      });
    });
  });

  describe('Mutations', () => {
    it('Should increment the current step index by 1 when calling "ADD_RECIPE_NEXT_STEP".', () => {
      app.$store.state.AddRecipe.currentStep = 3;

      app.$store.commit(ADD_RECIPE_NEXT_STEP);

      expect(app.$store.state.AddRecipe.currentStep).toBe(4);
    });

    it('Should decrease the current step index by 1 when calling "ADD_RECIPE_PREVIOUS_STEP".', () => {
      app.$store.state.AddRecipe.currentStep = 3;

      app.$store.commit(ADD_RECIPE_PREVIOUS_STEP);

      expect(app.$store.state.AddRecipe.currentStep).toBe(2);
    });

    it('Should set ingredients with a selected flag initialize to false when calling "ADD_RECIPE_SET_INGREDIENTS" with ingredients.', () => {
      const expectedIngredients = [
        {
          id: 'PATE-ID',
          label: 'Pâtes',
          unit: 'GR',
          type: 'STARCHY-FOOD',
          selected: false,
        },
        {
          id: 'SAUCE-TOMATE-ID',
          label: 'Sauce Tomate',
          unit: 'GR',
          type: 'CONDIMENT',
          selected: false,
        },
        {
          id: 'OIL-ID',
          label: 'Huile d\'olives',
          unit: 'CAC',
          type: 'CONDIMENT',
          selected: false,
        },
        {
          id: 'BREAD-ID',
          label: 'Pain',
          unit: 'SLICE',
          type: 'STARCHY-FOOD',
          selected: false,
        },
      ];

      app.$store.commit(ADD_RECIPE_SET_INGREDIENTS, ingredients);

      expect(app.$store.state.AddRecipe.ingredients).toEqual(expectedIngredients);
    });

    it('Should select the ingredient when calling "ADD_RECIPE_TOGGLE_INGREDIENT" with a given ingredient ID and the selected flag to true.', () => {
      const expectedIngredients = [
        {
          id: 'PATE-ID',
          label: 'Pâtes',
          unit: 'GR',
          type: 'STARCHY-FOOD',
          selected: false,
        },
        {
          id: 'SAUCE-TOMATE-ID',
          label: 'Sauce Tomate',
          unit: 'GR',
          type: 'CONDIMENT',
          selected: false,
        },
        {
          id: 'OIL-ID',
          label: 'Huile d\'olives',
          unit: 'CAC',
          type: 'CONDIMENT',
          selected: true,
        },
        {
          id: 'BREAD-ID',
          label: 'Pain',
          unit: 'SLICE',
          type: 'STARCHY-FOOD',
          selected: false,
        },
      ];

      app.$store.state.AddRecipe.ingredients = [...ingredients];

      app.$store.commit(ADD_RECIPE_TOGGLE_INGREDIENT, { ingredientId: 'OIL-ID', selected: true });

      expect(app.$store.state.AddRecipe.ingredients).toEqual(expectedIngredients);
    });

    it('Should unselect the ingredient when calling "ADD_RECIPE_TOGGLE_INGREDIENT" with a given ingredient ID and the selected flag to false.', () => {
      const initialIngredients = [
        {
          id: 'PATE-ID',
          label: 'Pâtes',
          unit: 'GR',
          type: 'STARCHY-FOOD',
          selected: true,
        },
        {
          id: 'SAUCE-TOMATE-ID',
          label: 'Sauce Tomate',
          unit: 'GR',
          type: 'CONDIMENT',
          selected: true,
        },
        {
          id: 'OIL-ID',
          label: 'Huile d\'olives',
          unit: 'CAC',
          type: 'CONDIMENT',
          selected: true,
        },
        {
          id: 'BREAD-ID',
          label: 'Pain',
          unit: 'SLICE',
          type: 'STARCHY-FOOD',
          selected: false,
        },
      ];

      const expectedIngredients = [
        {
          id: 'PATE-ID',
          label: 'Pâtes',
          unit: 'GR',
          type: 'STARCHY-FOOD',
          selected: true,
        },
        {
          id: 'SAUCE-TOMATE-ID',
          label: 'Sauce Tomate',
          unit: 'GR',
          type: 'CONDIMENT',
          selected: false,
        },
        {
          id: 'OIL-ID',
          label: 'Huile d\'olives',
          unit: 'CAC',
          type: 'CONDIMENT',
          selected: true,
        },
        {
          id: 'BREAD-ID',
          label: 'Pain',
          unit: 'SLICE',
          type: 'STARCHY-FOOD',
          selected: false,
        },
      ];

      app.$store.state.AddRecipe.ingredients = [...initialIngredients];

      app.$store.commit(ADD_RECIPE_TOGGLE_INGREDIENT, { ingredientId: 'SAUCE-TOMATE-ID', selected: false });

      expect(app.$store.state.AddRecipe.ingredients).toEqual(expectedIngredients);
    });

    it('Should reinitialize the state when calling "ADD_RECIPE_REINITIALIZE" mutation.', () => {
      app.$store.state.AddRecipe.currentStep = 3;
      app.$store.state.AddRecipe.ingredients = [...ingredients];

      app.$store.commit(ADD_RECIPE_REINITIALIZE);

      expect(app.$store.state.AddRecipe.currentStep).toBe(1);
      expect(app.$store.state.AddRecipe.ingredients).toEqual([]);
    });
  });
});
