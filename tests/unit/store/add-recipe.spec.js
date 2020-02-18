import AddRecipe from '@/store/modules/add-recipe';
import {
  ADD_RECIPE_NEXT_STEP,
  ADD_RECIPE_PREVIOUS_STEP,
  ADD_RECIPE_SET_INGREDIENTS,
  ADD_RECIPE_SET_TITLE,
  ADD_RECIPE_TOGGLE_MINUTES,
  ADD_RECIPE_TOGGLE_CALORIES_LEVEL,
  ADD_RECIPE_TOGGLE_INGREDIENT,
  ADD_RECIPE_REINITIALIZE,
} from '@/store/mutations';
import { ADD_RECIPE_GET_INGREDIENTS } from '@/store/actions';
import { getIngredients } from '@/api';
import { createAppStore } from '../../utils';

jest.mock('@/api');

describe('Add recipe steps store', () => {
  let app;

  const initialMinutes = [
    {
      value: '10',
      selected: false,
    },
    {
      value: '15',
      selected: false,
    },
    {
      value: '20',
      selected: false,
    },
    {
      value: '30',
      selected: false,
    },
    {
      value: '45',
      selected: false,
    },
    {
      value: '60',
      selected: false,
    },
  ];

  const initialCaloriesLevel = [
    {
      value: 'low',
      selected: false,
    },
    {
      value: 'medium',
      selected: false,
    },
    {
      value: 'high',
      selected: false,
    },
  ];

  const ingredientsApi = [
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

  const ingredients = ingredientsApi.map(ingredient => ({ ...ingredient, selected: false }));

  beforeEach(() => {
    const store = {
      modules: {
        AddRecipe,
      },
    };

    getIngredients.mockResolvedValue(ingredients);

    app = createAppStore(store);
  });

  describe('State', () => {
    it('Should set the current step index to 1.', () => {
      expect(app.$store.state.AddRecipe.currentStep).toBe(1);
    });

    it('Should set the ingredients to an empty array.', () => {
      expect(app.$store.state.AddRecipe.ingredients).toEqual([]);
    });

    it('Should set the recipe title to an empty string', () => {
      expect(app.$store.state.AddRecipe.title).toBe('');
    });

    it('Should set the minutes to an array with minutes value and selected flag.', () => {
      expect(app.$store.state.AddRecipe.minutes).toEqual(initialMinutes);
    });

    it('Should set the calories to an array with calories level value and selected flag.', () => {
      expect(app.$store.state.AddRecipe.caloriesLevel).toEqual(initialCaloriesLevel);
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
    describe('ADD_RECIPE_NEXT_STEP', () => {
      it('Should increment the current step index by 1.', () => {
        app.$store.state.AddRecipe.currentStep = 3;

        app.$store.commit(ADD_RECIPE_NEXT_STEP);

        expect(app.$store.state.AddRecipe.currentStep).toBe(4);
      });
    });

    describe('ADD_RECIPE_PREVIOUS_STEP', () => {
      it('Should decrease the current step index by 1.', () => {
        app.$store.state.AddRecipe.currentStep = 3;

        app.$store.commit(ADD_RECIPE_PREVIOUS_STEP);

        expect(app.$store.state.AddRecipe.currentStep).toBe(2);
      });
    });

    describe('ADD_RECIPE_SET_INGREDIENTS', () => {
      it('Should set ingredients with a selected flag initialize to false when calling with ingredients.', () => {
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
    });

    describe('ADD_RECIPE_SET_TITLE', () => {
      it('Should set the title with the given value.', () => {
        const expectedTitle = 'ARG';

        app.$store.commit(ADD_RECIPE_SET_TITLE, expectedTitle);

        expect(app.$store.state.AddRecipe.title).toBe(expectedTitle);
      });
    });

    describe('ADD_RECIPE_TOGGLE_INGREDIENT', () => {
      it('Should select the ingredient when calling with a given ingredient ID and the selected flag to true.', () => {
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

        app.$store.state.AddRecipe.ingredients = [...initialIngredients];

        app.$store.commit(ADD_RECIPE_TOGGLE_INGREDIENT, 'OIL-ID');

        expect(app.$store.state.AddRecipe.ingredients).toEqual(expectedIngredients);
      });

      it('Should unselect the ingredient when calling with a given ingredient ID and the selected flag to false.', () => {
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

        app.$store.commit(ADD_RECIPE_TOGGLE_INGREDIENT, 'SAUCE-TOMATE-ID');

        expect(app.$store.state.AddRecipe.ingredients).toEqual(expectedIngredients);
      });
    });

    describe('ADD_RECIPE_REINITIALIZE', () => {
      it('Should reinitialize the state.', () => {
        app.$store.state.AddRecipe.currentStep = 3;
        app.$store.state.AddRecipe.ingredients = [...ingredients];
        app.$store.state.AddRecipe.minutes = [];
        app.$store.state.AddRecipe.caloriesLevel = [];

        app.$store.commit(ADD_RECIPE_REINITIALIZE);

        expect(app.$store.state.AddRecipe.currentStep).toBe(1);
        expect(app.$store.state.AddRecipe.ingredients).toEqual([]);
        expect(app.$store.state.AddRecipe.minutes).toEqual(initialMinutes);
        expect(app.$store.state.AddRecipe.caloriesLevel).toEqual(initialCaloriesLevel);
      });
    });

    describe('ADD_RECIPE_TOGGLE_MINUTES', () => {
      it('Should toggle the selected minutes and set the other minutes selected flag to false.', () => {
        app.$store.state.AddRecipe.minutes[2].selected = true;

        const expectedMinutes = [...initialMinutes];
        expectedMinutes[3].selected = true;

        app.$store.commit(ADD_RECIPE_TOGGLE_MINUTES, '30');

        expect(app.$store.state.AddRecipe.minutes).toEqual(expectedMinutes);
      });
    });

    describe('ADD_RECIPE_TOGGLE_CALORIES_LEVEL', () => {
      it('Should toggle the selected calories level and set the other levels selected flag to false.', () => {
        app.$store.state.AddRecipe.caloriesLevel[1].selected = true;

        const expectedCaloriesLevel = [...initialCaloriesLevel];
        expectedCaloriesLevel[2].selected = true;

        app.$store.commit(ADD_RECIPE_TOGGLE_CALORIES_LEVEL, 'high');

        expect(app.$store.state.AddRecipe.caloriesLevel).toEqual(expectedCaloriesLevel);
      });
    });
  });

  describe('Actions', () => {
    describe('ADD_RECIPE_GET_INGREDIENTS', () => {
      it('Should get ingredients from API and commit them with "ADD_RECIPE_SET_INGREDIENTS" mutation.', (done) => {
        app.$store.dispatch(ADD_RECIPE_GET_INGREDIENTS);

        setTimeout(() => {
          expect(app.$store.state.AddRecipe.ingredients).toEqual(ingredients);
          done();
        });
      });
    });
  });
});
