<template>
  <v-container>
    <v-stepper v-model="currentStep" vertical>
      <RecipeTitleStep :title="$t('addRecipe.steps.newTitle')"
        :step="1" />

      <MinuteStep :title="$t('addRecipe.steps.minutes')" :step="2" />

      <CaloriesLevelStep :title="$t('addRecipe.steps.calories')" :step="3" />

      <IngredientStep :title="$t('addRecipe.steps.starchyFood')"
        :step="4" ingredient-type="STARCHY-FOOD" />

      <IngredientStep :title="$t('addRecipe.steps.vegetables')"
        :step="5" ingredient-type="VEGETABLE" />

      <IngredientStep :title="$t('addRecipe.steps.animalBased')"
        :step="6" ingredient-type="MEAT" />

      <IngredientStep :title="$t('addRecipe.steps.fruits')"
        :step="7" ingredient-type="FRUIT" />

      <IngredientStep :title="$t('addRecipe.steps.dairyProducts')"
        :step="8" ingredient-type="DAIRY-PRODUCT" />

      <IngredientStep :title="$t('addRecipe.steps.condiments')"
        :step="9" ingredient-type="CONDIMENT" />

      <IngredientStep :title="$t('addRecipe.steps.others')"
        :step="10" ingredient-type="OTHER" />
    </v-stepper>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

import { getIngredients } from '@/api';
import IngredientStep from '@/components/add-recipe/IngredientStep.vue';
import MinuteStep from '@/components/add-recipe/MinuteStep.vue';
import CaloriesLevelStep from '@/components/add-recipe/CaloriesLevelStep.vue';
import RecipeTitleStep from '@/components/add-recipe/RecipeTitleStep.vue';
import { ADD_RECIPE_SET_INGREDIENTS } from '@/store/mutations';

export default {
  name: 'add-recipe',
  components: {
    CaloriesLevelStep,
    IngredientStep,
    MinuteStep,
    RecipeTitleStep,
  },
  computed: {
    ...mapState({
      currentStep: state => state.AddRecipe.currentStep,
    }),
  },
  mounted() {
    getIngredients().then((ingredients) => {
      this.$store.commit(ADD_RECIPE_SET_INGREDIENTS, ingredients);
    });
  },
};
</script>
