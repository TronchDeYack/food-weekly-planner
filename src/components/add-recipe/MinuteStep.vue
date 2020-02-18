<template>
  <div>
    <StepTitle :step="step" :title="title" />
    <StepContent :step="step">
      <v-chip-group column active-class="primary">
        <v-chip label v-for="minutesTuple in minutes" :input-value="minutesTuple.selected"
          @click.native="toggleMinutes(minutesTuple)" :key="minutesTuple.value">
          {{ minutesTuple.value }}
        </v-chip>
      </v-chip-group>
    </StepContent>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import StepTitle from '@/components/add-recipe/StepTitle.vue';
import StepContent from '@/components/add-recipe/StepContent.vue';
import { ADD_RECIPE_TOGGLE_MINUTES } from '@/store/mutations';

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
  computed: {
    ...mapState({
      minutes: state => state.AddRecipe.minutes,
    }),
  },
  methods: {
    toggleMinutes(minutes) {
      this.$store.commit(ADD_RECIPE_TOGGLE_MINUTES, minutes);
    },
  },
};
</script>
