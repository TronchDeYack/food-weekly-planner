<template>
  <v-container>
    <div class="d-flex align-center justify-space-between mt-2">
      <h2>{{ $t('menu.title') }}</h2>
      <v-btn color="primary">{{ $t('menu.regenerate') }}</v-btn>
    </div>
    <v-row>
      <v-col>
        <MenuCard v-for="recipe in this.recipes" :key="recipe.id"
          :id="recipe.id" :title="recipe.title" :calories-level="recipe.caloriesLevel"
          :ingredients="recipe.ingredients" :minutes="recipe.minutes"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MenuCard from '@/components/MenuCard.vue';
import { getRecipesOfTheWeek } from '@/api';

export default {
  name: 'menu-of-the-week',
  components: {
    MenuCard,
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    getRecipesOfTheWeek().then((recipes) => {
      this.recipes = recipes;
    });
  },
};
</script>
