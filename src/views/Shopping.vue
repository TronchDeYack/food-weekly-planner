<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="shoppingCategory in shoppingCategories" :key="shoppingCategory.type">
      <v-expansion-panel-header>
        {{ getCategoryHeader(shoppingCategory) }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list>
          <v-list-item-group multiple active-class="">
            <v-list-item
              v-for="ingredient in shoppingCategory.ingredients" :key="ingredient.id"
            >
              <template>
                <v-list-item-content>
                  <v-list-item-title>{{ ingredient.label }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-checkbox color="primary"
                    @click.native="toggleIngredient(ingredient.id)"
                    :input-value="ingredient.bought"
                    v-model="ingredient.bought"
                  />
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
.v-list-item--link:before {
  background-color: white !important;
}
</style>

<script>
import { getShoppingList } from '@/api';

export default {
  name: 'shopping',
  data() {
    return {
      ingredients: [],
    };
  },
  mounted() {
    getShoppingList().then((ingredients) => {
      this.ingredients = ingredients;
    });
  },
  methods: {
    getCategoryHeader(category) {
      return `${category.type} (${category.nbrBought}/${category.nbrToBuy})`;
    },
    toggleIngredient(ingredientId) {
      const ingredientIndex = this.ingredients.findIndex(
        ingredient => ingredient.id === ingredientId,
      );
      this.ingredients[ingredientIndex].bought = !this.ingredients[ingredientIndex].bought;
    },
  },
  computed: {
    shoppingCategories() {
      const categories = this.ingredients.reduce((accumulator, currentIngredient) => {
        const currentIngredientType = currentIngredient.type;
        const ingredientCategoryIndex = accumulator.findIndex(
          ingredient => ingredient.type === currentIngredientType,
        );
        const ingredientLabel = currentIngredient.unit === 'unit'
          ? `${currentIngredient.label} (${currentIngredient.quantity})`
          : `${currentIngredient.label} (${currentIngredient.quantity} ${currentIngredient.unit})`;

        if (ingredientCategoryIndex !== -1) {
          accumulator[ingredientCategoryIndex].ingredients.push({
            id: currentIngredient.id,
            label: ingredientLabel,
            bought: currentIngredient.bought,
          });
        } else {
          accumulator.push({
            type: currentIngredientType,
            ingredients: [{
              id: currentIngredient.id,
              label: ingredientLabel,
              bought: currentIngredient.bought,
            }],
          });
        }
        return accumulator;
      }, []);
      return categories.map(category => ({
        ...category,
        nbrToBuy: category.ingredients.length,
        nbrBought: category.ingredients.filter(ingredient => ingredient.bought).length,
      }));
    },
  },
};
</script>
