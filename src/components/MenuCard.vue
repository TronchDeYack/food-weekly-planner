<template>
  <v-card class="mt-3 mb-3" :to="getRecipeDetailsUrl()">
    <v-card-title>{{title}}</v-card-title>
    <v-card-text>
      <v-row align="center">
        <v-col class="d-flex align-center">
          <Timer />
          {{minutes}} min
        </v-col>
        <v-col>
          <Calories :class="caloriesLevel"/>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      Contient
      <v-chip-group column>
        <v-chip label><Egg :disabled="!this.hasEgg"/></v-chip>
        <v-chip label><Fish :disabled="!this.hasFish"/></v-chip>
        <v-chip label><Meat :disabled="!this.hasMeat"/></v-chip>
        <v-chip label><Vegetable :disabled="!this.isVegetarian"/></v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
svg {
  width: 30px;
  height: 30px;
}
</style>

<script>
import Calories from '@/components/icons/Calories.vue';
import Egg from '@/components/icons/Egg.vue';
import Fish from '@/components/icons/Fish.vue';
import Meat from '@/components/icons/Meat.vue';
import Timer from '@/components/icons/Timer.vue';
import Vegetable from '@/components/icons/Vegetable.vue';

export default {
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    minutes: {
      type: Number,
    },
    caloriesLevel: {
      type: String,
    },
    ingredients: {
      type: Array,
    },
  },
  components: {
    Calories,
    Egg,
    Fish,
    Meat,
    Timer,
    Vegetable,
  },
  methods: {
    getRecipeDetailsUrl() {
      return `/recipes/${this.id}`;
    },
  },
  computed: {
    hasEgg() {
      return !!this.ingredients.find(ingredient => ingredient.type === 'EGG');
    },
    hasMeat() {
      return !!this.ingredients.find(ingredient => ingredient.type === 'MEAT');
    },
    hasFish() {
      return !!this.ingredients.find(ingredient => ingredient.type === 'FISH');
    },
    isVegetarian() {
      return !this.ingredients.find(ingredient => ingredient.type === 'FISH' || ingredient.type === 'MEAT');
    },
  },
};
</script>
