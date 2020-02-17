<template>
  <v-stepper-content :step="step">
    <slot></slot>
    <StepActions />
  </v-stepper-content>
</template>

<script>
import StepActions from '@/components/add-recipe/StepActions.vue';

export default {
  name: 'add-recipe-step-content',
  components: {
    StepActions,
  },
  props: {
    step: {
      type: Number,
    },
  },
};
</script>
