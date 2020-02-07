<template>
  <v-app id="app">
    <router-view />
    <BottomNavbar />
  </v-app>
</template>

<script>
import BottomNavbar from '@/components/BottomNavbar.vue';

export default {
  name: 'app',
  components: {
    BottomNavbar,
  },
};
</script>
