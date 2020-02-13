<template>
  <div>
    <StepTitle :complete="complete" :step="step" :title="title" />
    <StepContent :step="step" @next-step="nextStep" @previous-step="previousStep">
      <v-slider
        :tick-labels="caloriesLabel"
        :max="caloriesLabel.length - 1"
        step="1"
        ticks="always"
        tick-size="3"
      ></v-slider>
    </StepContent>
  </div>
</template>

<script>
import StepTitle from '@/components/add-recipe/StepTitle.vue';
import StepContent from '@/components/add-recipe/StepContent.vue';

export default {
  name: 'add-recipe-calories-level-step',
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
    complete: {
      type: Boolean,
    },
  },
  data() {
    return {
      caloriesLabel: [
        'Low',
        'Medium',
        'High',
      ],
    };
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
