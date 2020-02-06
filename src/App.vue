<template>
  <div id="app">
    <div class="container">
      <h1>Menu of the week</h1>
      <div class="row">
        <div class="col-12">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Spaghetti bolognaise</h5>
              <Calories :disabled="false"/>
              <Egg :disabled="false"/>
              <Fish :disabled="false"/>
              <Meat :disabled="false"/>
              <Pig :disabled="false"/>
              <Timer :disabled="false"/>
              <Vegetable :disabled="false"/>
              <p class="card-text">Some quick example text to build on the card
                title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>

<script>
import Calories from '@/components/icons/Calories.vue';
import Egg from '@/components/icons/Egg.vue';
import Fish from '@/components/icons/Fish.vue';
import Meat from '@/components/icons/Meat.vue';
import Pig from '@/components/icons/Pig.vue';
import Timer from '@/components/icons/Timer.vue';
import Vegetable from '@/components/icons/Vegetable.vue';

export default {
  name: 'app',
  components: {
    Calories,
    Egg,
    Fish,
    Meat,
    Pig,
    Timer,
    Vegetable,
  },
};
</script>
