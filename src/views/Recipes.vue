<template>
  <v-container>
    <h2 class="mt-2">Recipes</h2>
    <v-row>
      <v-col cols=12>
        <MenuCard v-for="recipe in this.recipes" :key="recipe.id"
          :id="recipe.id" :title="recipe.title" :calories-level="recipe.caloriesLevel"
          :ingredients="recipe.ingredients" :minutes="recipe.minutes"
        />
      </v-col>
    </v-row>
    <v-btn
      absolute
      fixed
      dark
      fab
      bottom
      right
      color="secondary"
      class="btn-over-navbar"
      to="/add-recipe"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>


<script>
import MenuCard from '@/components/MenuCard.vue';
import { getRecipes } from '@/api';

export default {
  name: 'recipes',
  components: {
    MenuCard,
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    getRecipes().then((recipes) => {
      this.recipes = recipes;
    });
  },
};
</script>
