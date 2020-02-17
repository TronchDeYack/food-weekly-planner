import {
  ADD_RECIPE_NEXT_STEP,
  ADD_RECIPE_PREVIOUS_STEP,
  ADD_RECIPE_SET_INGREDIENTS,
  ADD_RECIPE_TOGGLE_INGREDIENT,
  ADD_RECIPE_REINITIALIZE,
} from '@/store/mutations';

const initialState = {
  currentStep: 1,
  ingredients: [],
};

const getters = {
  filteredIngredients: state => type => state.ingredients
    .filter(ingredient => ingredient.type === type),
};

const mutations = {
  [ADD_RECIPE_NEXT_STEP](state) {
    state.currentStep += 1;
  },
  [ADD_RECIPE_PREVIOUS_STEP](state) {
    state.currentStep -= 1;
  },
  [ADD_RECIPE_SET_INGREDIENTS](state, ingredients) {
    state.ingredients = ingredients.map(ingredient => ({
      ...ingredient,
      selected: false,
    }));
  },
  [ADD_RECIPE_TOGGLE_INGREDIENT](state, { ingredientId, selected }) {
    const ingredientIndex = state.ingredients.findIndex(
      ingredient => ingredient.id === ingredientId,
    );
    state.ingredients[ingredientIndex].selected = selected;
  },
  [ADD_RECIPE_REINITIALIZE](state) {
    state.currentStep = initialState.currentStep;
    state.ingredients = [];
  },
};

export default {
  state: { ...initialState },
  getters,
  mutations,
};
