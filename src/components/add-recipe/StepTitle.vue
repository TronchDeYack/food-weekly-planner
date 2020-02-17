<template>
  <v-stepper-step :complete="complete" :step="step">
    {{ title }}
  </v-stepper-step>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'add-recipe-step-title',
  props: {
    title: {
      type: String,
    },
    step: {
      type: Number,
    },
  },
  computed: {
    ...mapState({
      currentStep: state => state.AddRecipe.currentStep,
    }),
    complete() {
      return this.currentStep > this.step;
    },
  },
};
</script>
