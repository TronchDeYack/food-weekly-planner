<template>
  <div class="card mt-3 mb-3">
    <div class="card-body">
      <div class="card-title d-flex justify-content-between">
        <h5 class="mb-0">{{ title }}</h5>
        <div class="form-check">
          <input class="form-check-input" type="checkbox"
            id="inlineCheckbox1" value="option1" />
        </div>
      </div>
      <div class="row">
        <div class="col-6 mt-2">
          <Timer />
          {{ minutes }} min
        </div>
        <div class="col-6 mt-2">
          <Calories :class="caloriesIndicator" />
        </div>
      <div class="col-12 mt-4">
        Contient
        <Egg class="ml-1 mr-4" :disabled="!hasEgg"/>
        <Fish class="mr-4" :disabled="!hasFish"/>
        <Meat class="mr-4" :disabled="!hasMeat"/>
        <Vegetable :disabled="!isVegetarian"/>
      </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
svg {
  width: 32px;
  height: 32px;
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
    title: {
      type: String,
    },
    minutes: {
      type: Number,
    },
    caloriesIndicator: {
      type: String,
    },
    hasEgg: {
      type: Boolean,
    },
    hasMeat: {
      type: Boolean,
    },
    hasFish: {
      type: Boolean,
    },
    isVegetarian: {
      type: Boolean,
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
};
</script>
