<template>
  <v-container>
    <v-row>
      <v-col cols=12>
        <h3>Spaghetti Bolognaise</h3>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex align-center">
        <Timer />
        20 min
      </v-col>
      <v-col>
        <Calories class="medium"/>
      </v-col>
    </v-row>
    <v-divider/>
    <v-row>
      <v-col cols=12 class="pb-0">
        <h4>Ingrédients</h4>
      </v-col>
      <v-col cols=12 class="pt-0">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              Pâtes: 200 gr
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              Sauce tomate: 200 gr
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              Steak haché: 100 gr
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              Huile d'olives: 3 cac
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Calories from '@/components/icons/Calories.vue';
import Timer from '@/components/icons/Timer.vue';

export default {
  name: 'recipe-details',
  components: {
    Calories,
    Timer,
  },
};
</script>
