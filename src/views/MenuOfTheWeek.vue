<template>
  <v-container>
    <div class="d-flex align-center justify-space-between mt-2">
      <h2>Menu of the week</h2>
      <v-btn color="primary">Regenerate</v-btn>
    </div>
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
  name: 'menu-of-the-week',
  components: {
    MenuCard,
  },
};
</script>
