<template>
  <v-stepper-content :step="step">
    <slot></slot>
    <StepActions :step="step" @next-step="nextStep" @previous-step="previousStep"/>
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
