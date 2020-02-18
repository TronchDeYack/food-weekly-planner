<template>
  <div>
    <StepTitle :step="step" :title="title" />
    <StepContent :step="step">
      <v-chip-group active-class="primary">
        <v-chip label v-for="caloriesLevelTuple in caloriesLevel"
          :input-value="caloriesLevelTuple.selected"
          @click.native="toggleCaloriesLevel(caloriesLevelTuple)" :key="caloriesLevelTuple.value">
          {{ $t(`common.calories.${caloriesLevelTuple.value}`) }}
        </v-chip>
      </v-chip-group>
    </StepContent>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import StepTitle from '@/components/add-recipe/StepTitle.vue';
import StepContent from '@/components/add-recipe/StepContent.vue';
import { ADD_RECIPE_TOGGLE_CALORIES_LEVEL } from '@/store/mutations';

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
  },
  computed: {
    ...mapState({
      caloriesLevel: state => state.AddRecipe.caloriesLevel,
    }),
  },
  methods: {
    toggleCaloriesLevel(caloriesLevel) {
      this.$store.commit(ADD_RECIPE_TOGGLE_CALORIES_LEVEL, caloriesLevel);
    },
  },
};
</script>
