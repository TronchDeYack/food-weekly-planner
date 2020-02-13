<template>
  <v-container>
    <v-stepper v-model="currentStep" vertical>
      <RecipeTitleStep :title="$t('addRecipe.steps.newTitle')"
        :step="1" :complete="currentStep > 1"
        @next-step="updateStep" @previous-step="updateStep"
      />

      <MinuteStep :title="$t('addRecipe.steps.minutes')"
        :step="2" :complete="currentStep > 2"
        @next-step="updateStep" @previous-step="updateStep"
      />

      <CaloriesLevelStep :title="$t('addRecipe.steps.calories')"
        :step="3" :complete="currentStep > 3"
        @next-step="updateStep" @previous-step="updateStep"
      />

      <IngredientStep :title="$t('addRecipe.steps.starchyFood')"
        :step="4" :complete="currentStep > 4"
        :ingredients="ingredients" ingredient-type="STARCHY-FOOD"
        @next-step="updateStep" @previous-step="updateStep"
      />

      <IngredientStep :title="$t('addRecipe.steps.vegetables')"
        :step="5" :complete="currentStep > 5"
        :ingredients="ingredients" ingredient-type="VEGETABLE"
        @next-step="updateStep" @previous-step="updateStep"
      />

      <IngredientStep :title="$t('addRecipe.steps.animalBased')"
        :step="6" :complete="currentStep > 6"
        :ingredients="ingredients" ingredient-type="MEAT"
        @next-step="updateStep" @previous-step="updateStep"
      />

      <IngredientStep :title="$t('addRecipe.steps.fruits')"
        :step="7" :complete="currentStep > 7"
        :ingredients="ingredients" ingredient-type="FRUIT"
        @next-step="updateStep" @previous-step="updateStep"
      />

      <IngredientStep :title="$t('addRecipe.steps.dairyProducts')"
        :step="8" :complete="currentStep > 8"
        :ingredients="ingredients" ingredient-type="DAIRY-PRODUCT"
        @next-step="updateStep" @previous-step="updateStep"
      />

      <IngredientStep :title="$t('addRecipe.steps.condiments')"
        :step="9" :complete="currentStep > 9"
        :ingredients="ingredients" ingredient-type="CONDIMENT"
        @next-step="updateStep" @previous-step="updateStep"
      />

      <IngredientStep :title="$t('addRecipe.steps.others')"
        :step="10" :complete="currentStep > 10"
        :ingredients="ingredients" ingredient-type="OTHER"
        @next-step="updateStep" @previous-step="updateStep"
      />
    </v-stepper>
  </v-container>
</template>

<script>
import { getIngredients } from '@/api';
import IngredientStep from '@/components/add-recipe/IngredientStep.vue';
import MinuteStep from '@/components/add-recipe/MinuteStep.vue';
import CaloriesLevelStep from '@/components/add-recipe/CaloriesLevelStep.vue';
import RecipeTitleStep from '@/components/add-recipe/RecipeTitleStep.vue';

export default {
  name: 'add-recipe',
  components: {
    CaloriesLevelStep,
    IngredientStep,
    MinuteStep,
    RecipeTitleStep,
  },
  data() {
    return {
      currentStep: 1,
      ingredients: [],
    };
  },
  mounted() {
    getIngredients().then((ingredients) => {
      this.ingredients = ingredients;
    });
  },
  // TODO: remove that by using a store
  methods: {
    updateStep({ step }) {
      this.currentStep = step;
    },
  },
};
</script>
