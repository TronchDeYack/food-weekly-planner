<template>
  <v-container>
    <h2 class="mt-3">Menu of the week</h2>
    <v-row>
      <v-col>
        <MenuCard title="Spaghetti bolognaise" :minutes=20
          calories-indicator="medium" :has-egg="false" :has-fish="false"
          :has-meat="true" :is-vegetarian="false" />
        <MenuCard title="Soupe de légumes" :minutes=30
          calories-indicator="low" :has-egg="false" :has-fish="false"
          :has-meat="false" :is-vegetarian="true" />
        <MenuCard title="Sushi x48" :minutes=5
          calories-indicator="high" :has-egg="true" :has-fish="true"
          :has-meat="true" :is-vegetarian="false" />
        <MenuCard title="Spaghetti bolognaise" :minutes=20
          calories-indicator="medium" :has-egg="false" :has-fish="false"
          :has-meat="true" :is-vegetarian="false" />
        <MenuCard title="Soupe de légumes" :minutes=30
          calories-indicator="low" :has-egg="false" :has-fish="false"
          :has-meat="false" :is-vegetarian="true" />
        <MenuCard title="Sushi x48" :minutes=5
          calories-indicator="high" :has-egg="true" :has-fish="true"
          :has-meat="true" :is-vegetarian="false" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MenuCard from '@/components/MenuCard.vue';

export default {
  name: 'app',
  components: {
    MenuCard,
  },
};
</script>
