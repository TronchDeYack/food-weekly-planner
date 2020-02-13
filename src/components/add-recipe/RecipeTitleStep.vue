<template>
  <div>
    <StepTitle :complete="complete" :step="step" :title="title" />
    <StepContent :step="step" @next-step="nextStep" @previous-step="previousStep">
      <v-text-field :label="$t('addRecipe.steps.titleLabel')" />
    </StepContent>
  </div>
</template>

<script>
import StepTitle from '@/components/add-recipe/StepTitle.vue';
import StepContent from '@/components/add-recipe/StepContent.vue';

export default {
  name: 'add-recipe-step-recipe-title',
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
