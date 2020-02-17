<template>
  <div>
    <StepTitle :step="step" :title="title" />
    <StepContent :step="step">
      <v-chip-group multiple active-class="primary">
        <v-chip label v-for="ingredient in filteredIngredients"
          :key="ingredient.id">
          {{ ingredient.label }}
        </v-chip>
      </v-chip-group>
    </StepContent>
  </div>
</template>

<script>
import StepTitle from '@/components/add-recipe/StepTitle.vue';
import StepContent from '@/components/add-recipe/StepContent.vue';

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
};
</script>
