<template>
  <div>
    <StepTitle :complete="complete" :step="step" :title="title" />
    <StepContent :step="step" @next-step="nextStep" @previous-step="previousStep">
      <v-chip-group multiple active-class="primary">
        <v-chip label v-for="ingredient in filteredIngredients" :key="ingredient.id">
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
    ingredients: {
      type: Array,
    },
    ingredientType: {
      type: String,
    },
    complete: {
      type: Boolean,
    },
  },
  computed: {
    filteredIngredients() {
      return this.ingredients.filter(ingredient => ingredient.type === this.ingredientType);
    },
  },
  // TODO: remove that by using a store
  methods: {
    nextStep(event) {
      this.$emit('next-step', event);
    },
    previousStep(event) {
      this.$emit('previous-step', event);
    },
  },
};
</script>
