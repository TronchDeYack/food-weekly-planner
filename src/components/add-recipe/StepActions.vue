<template>
  <div class="mt-2">
    <v-btn class="continue-btn" color="primary" @click.native="nextStep">
      {{ $t('common.btn.continue') }}
    </v-btn>
    <v-btn class="cancel-btn" text @click.native="previousStep">
      {{ $t('common.btn.cancel') }}
    </v-btn>
  </div>
</template>

<script>
import { ADD_RECIPE_NEXT_STEP, ADD_RECIPE_PREVIOUS_STEP } from '@/store/mutations';

export default {
  name: 'add-recipe-step-actions',
  methods: {
    nextStep() {
      this.$store.commit(ADD_RECIPE_NEXT_STEP);
    },
    previousStep() {
      this.$store.commit(ADD_RECIPE_PREVIOUS_STEP);
    },
  },
};
</script>
