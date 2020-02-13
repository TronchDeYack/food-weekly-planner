<template>
  <v-stepper-step :complete="complete" :step="step">
    {{ title }}
  </v-stepper-step>
</template>

<script>
export default {
  name: 'add-recipe-step-title',
  props: {
    title: {
      type: String,
    },
    complete: {
      type: Boolean,
    },
    step: {
      type: Number,
    },
  },
};
</script>
