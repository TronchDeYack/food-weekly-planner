const recipeFake = {
  id: 'SPAGHETTI-ID',
  title: 'Spaghetti bolognaise',
  minutes: 20,
  caloriesLevel: 'medium',
  ingredients: [
    {
      id: 'PATE-ID',
      label: 'Pâtes',
      quantity: 200,
      unit: 'GR',
      type: 'STARCHY-FOOD',
    },
    {
      id: 'SAUCE-TOMATE-ID',
      label: 'Sauce Tomate',
      quantity: 200,
      unit: 'GR',
      type: 'CONDIMENT',
    },
    {
      id: 'STEAK-ID',
      label: 'Steak haché',
      quantity: 100,
      unit: 'GR',
      type: 'MEAT',
    },
    {
      id: 'OIL-ID',
      label: 'Huile d\'olives',
      quantity: 3,
      unit: 'CAC',
      type: 'CONDIMENT',
    },
  ],
};

const recipesFake = [
  recipeFake,
  {
    id: 'SOUPE-ID',
    title: 'Soupe à la tomate',
    minutes: 30,
    caloriesLevel: 'low',
    ingredients: [
      {
        id: 'TOMATE-ID',
        label: 'Tomates',
        quantity: 4,
        unit: 'UNIT',
        type: 'VEGETABLE',
      },
      {
        id: 'SALT-ID',
        label: 'Sel',
        quantity: 2,
        unit: 'CAC',
        type: 'CONDIMENT',
      },
    ],
  },
  {
    id: 'WELSH-ID',
    title: 'Welsh',
    minutes: 45,
    caloriesLevel: 'high',
    ingredients: [
      {
        id: 'CHEDDAR-ID',
        label: 'Cheddar',
        quantity: 400,
        unit: 'GR',
        type: 'DAIRY-PRODUCT',
      },
      {
        id: 'BEER-ID',
        label: 'Bière brune',
        quantity: 25,
        unit: 'CL',
        type: 'OTHER',
      },
      {
        id: 'HAM-ID',
        label: 'Jambon',
        quantity: 100,
        unit: 'GR',
        type: 'MEAT',
      },
      {
        id: 'BREAD-ID',
        label: 'Pain',
        quantity: 4,
        unit: 'SLICE',
        type: 'STARCHY-FOOD',
      },
    ],
  },
];

export function getRecipe(id) {
  console.log(`get recipe ${id}`);
  return Promise.resolve(recipeFake);
}

export function getRecipes() {
  return Promise.resolve(recipesFake);
}

export function getRecipesOfTheWeek() {
  return Promise.resolve([recipesFake[1], recipesFake[2]]);
}

export function getShoppingList() {
  return Promise.resolve([
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
      bought: false,
    },
  ]);
}

export function getIngredients() {
  return Promise.resolve([
    {
      id: 'PATE-ID',
      label: 'Pâtes',
      quantity: 200,
      unit: 'GR',
      type: 'STARCHY-FOOD',
    },
    {
      id: 'SAUCE-TOMATE-ID',
      label: 'Sauce Tomate',
      quantity: 200,
      unit: 'GR',
      type: 'CONDIMENT',
    },
    {
      id: 'STEAK-ID',
      label: 'Steak haché',
      quantity: 100,
      unit: 'GR',
      type: 'MEAT',
    },
    {
      id: 'OIL-ID',
      label: 'Huile d\'olives',
      quantity: 3,
      unit: 'CAC',
      type: 'CONDIMENT',
    },
    {
      id: 'TOMATE-ID',
      label: 'Tomates',
      quantity: 4,
      unit: 'UNIT',
      type: 'VEGETABLE',
    },
    {
      id: 'SALT-ID',
      label: 'Sel',
      quantity: 2,
      unit: 'CAC',
      type: 'CONDIMENT',
    },
    {
      id: 'CHEDDAR-ID',
      label: 'Cheddar',
      quantity: 400,
      unit: 'GR',
      type: 'DAIRY-PRODUCT',
    },
    {
      id: 'BEER-ID',
      label: 'Bière brune',
      quantity: 25,
      unit: 'CL',
      type: 'OTHER',
    },
    {
      id: 'HAM-ID',
      label: 'Jambon',
      quantity: 100,
      unit: 'GR',
      type: 'MEAT',
    },
    {
      id: 'BREAD-ID',
      label: 'Pain',
      quantity: 4,
      unit: 'SLICE',
      type: 'STARCHY-FOOD',
    },
  ]);
}
