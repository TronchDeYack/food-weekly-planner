<template>
  <v-container v-if="this.recipe">
    <v-row>
      <v-col cols=12>
        <h3>{{ this.recipe.title }}</h3>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex align-center">
        <Timer />
        {{ this.recipe.minutes }} min
      </v-col>
      <v-col>
        <Calories :class="this.recipe.caloriesLevel"/>
      </v-col>
    </v-row>
    <v-divider/>
    <v-row>
      <v-col cols=12 class="pb-0">
        <h4>Ingrédients</h4>
      </v-col>
      <v-col cols=12 class="pt-0">
        <v-list>
          <v-list-item v-for="ingredient in this.recipe.ingredients" :key="ingredient.id">
            <v-list-item-content>
              {{ ingredient.label }}: {{ ingredient.quantity }} {{ ingredient.unit }}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Calories from '@/components/icons/Calories.vue';
import Timer from '@/components/icons/Timer.vue';
import { getRecipe } from '@/api';

export default {
  name: 'recipe-details',
  props: ['id'],
  components: {
    Calories,
    Timer,
  },
  data() {
    return {
      recipe: null,
    };
  },
  mounted() {
    getRecipe(this.id).then((recipe) => {
      this.recipe = recipe;
    });
  },
};
</script>
