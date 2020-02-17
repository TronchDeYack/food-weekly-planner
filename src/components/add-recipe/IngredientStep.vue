<template>
  <div>
    <StepTitle :step="step" :title="title" />
    <StepContent :step="step">
      <v-chip-group multiple active-class="primary">
        <v-chip label v-for="ingredient in filteredIngredients" :input-value="ingredient.selected"
          @click.native="toggleIngredient(ingredient)" :key="ingredient.id">
          {{ ingredient.label }}
        </v-chip>
      </v-chip-group>
    </StepContent>
  </div>
</template>

<script>
import StepTitle from '@/components/add-recipe/StepTitle.vue';
import StepContent from '@/components/add-recipe/StepContent.vue';

import { ADD_RECIPE_TOGGLE_INGREDIENT } from '@/store/mutations';

export default {
  name: 'add-recipe-ingredient-step',
  components: {
    StepContent,
    StepTitle,
  },
  props: {
    title: {
      type: String,
    },
    step: {
      type: Number,
    },
    ingredientType: {
      type: String,
    },
  },
  computed: {
    filteredIngredients() {
      return this.$store.getters.filteredIngredients(this.ingredientType);
    },
  },
  methods: {
    toggleIngredient(ingredient) {
      this.$store.commit(ADD_RECIPE_TOGGLE_INGREDIENT, {
        ingredientId: ingredient.id,
        selected: !ingredient.selected,
      });
    },
  },
};
</script>
