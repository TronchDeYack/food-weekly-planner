<template>
  <v-container>
    <h2 class="mt-2">Recipes</h2>
    <v-row>
      <v-col>
        <MenuCard title="Spaghetti bolognaise" :minutes=20
          calories-indicator="medium" :has-egg="false" :has-fish="false"
          :has-meat="true" :is-vegetarian="false" />
      </v-col>
    </v-row>
    <v-btn
      absolute
      dark
      fab
      bottom
      right
      color="secondary"
      class="btn-over-navbar"
      to="/add-recipe"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>


<script>
import MenuCard from '@/components/MenuCard.vue';

export default {
  name: 'recipes',
  components: {
    MenuCard,
  },
};
</script>
