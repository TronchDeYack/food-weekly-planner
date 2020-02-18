import {
  ADD_RECIPE_NEXT_STEP,
  ADD_RECIPE_PREVIOUS_STEP,
  ADD_RECIPE_SET_INGREDIENTS,
  ADD_RECIPE_SET_TITLE,
  ADD_RECIPE_TOGGLE_INGREDIENT,
  ADD_RECIPE_TOGGLE_MINUTES,
  ADD_RECIPE_TOGGLE_CALORIES_LEVEL,
  ADD_RECIPE_REINITIALIZE,
} from '@/store/mutations';
import { ADD_RECIPE_GET_INGREDIENTS } from '@/store/actions';
import { getIngredients } from '@/api';

const initialState = {
  currentStep: 1,
  title: '',
  minutes: [
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
  ],
  caloriesLevel: [
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
  ],
  ingredients: [],
};

const getters = {
  filteredIngredients: state => type => state.ingredients
    .filter(ingredient => ingredient.type === type),
};

function toggleFlagProcess(selectedValue) {
  return ({ value, selected }) => (
    value !== selectedValue
      ? { value, selected: false }
      : { value, selected: !selected }
  );
}

const mutations = {
  [ADD_RECIPE_NEXT_STEP](state) {
    state.currentStep += 1;
  },
  [ADD_RECIPE_PREVIOUS_STEP](state) {
    state.currentStep -= 1;
  },
  [ADD_RECIPE_SET_TITLE](state, title) {
    state.title = title;
  },
  [ADD_RECIPE_SET_INGREDIENTS](state, ingredients) {
    state.ingredients = ingredients.map(ingredient => ({
      ...ingredient,
      selected: false,
    }));
  },
  [ADD_RECIPE_TOGGLE_INGREDIENT](state, ingredientId) {
    const ingredientIndex = state.ingredients.findIndex(
      ingredient => ingredient.id === ingredientId,
    );
    state.ingredients[ingredientIndex].selected = !state.ingredients[ingredientIndex].selected;
  },
  [ADD_RECIPE_TOGGLE_MINUTES](state, value) {
    const process = toggleFlagProcess(value);
    state.minutes = state.minutes.map(process);
  },
  [ADD_RECIPE_TOGGLE_CALORIES_LEVEL](state, value) {
    const process = toggleFlagProcess(value);
    state.caloriesLevel = state.caloriesLevel.map(process);
  },
  [ADD_RECIPE_REINITIALIZE](state) {
    state.currentStep = initialState.currentStep;
    state.ingredients = [];
    state.minutes = initialState.minutes;
    state.caloriesLevel = initialState.caloriesLevel;
  },
};

const actions = {
  [ADD_RECIPE_GET_INGREDIENTS]({ commit }) {
    getIngredients().then((ingredients) => {
      commit(ADD_RECIPE_SET_INGREDIENTS, ingredients);
    });
  },
};

export default {
  state: { ...initialState },
  getters,
  mutations,
  actions,
};
