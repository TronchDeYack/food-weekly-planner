<template>
  <div>
    <StepTitle :step="step" :title="title" />
    <StepContent :step="step">
      <v-slider
        :tick-labels="minutesLabel"
        :max="minutesLabel.length - 1"
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
  name: 'add-recipe-minute-step',
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
  },
  data() {
    return {
      minutesLabel: [
        '5',
        '10',
        '15',
        '30',
        '45',
        '60',
        '+ 60',
      ],
    };
  },
};
</script>
