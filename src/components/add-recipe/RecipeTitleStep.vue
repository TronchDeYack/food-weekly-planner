<template>
  <div>
    <StepTitle :step="step" :title="title" />
    <StepContent :step="step">
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
  },
};
</script>
