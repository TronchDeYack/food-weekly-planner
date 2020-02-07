<template>
  <v-app id="app">
    <Header />
    <v-content>
      <router-view />
    </v-content>
    <BottomNavbar />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import BottomNavbar from '@/components/BottomNavbar.vue';

export default {
  name: 'app',
  components: {
    BottomNavbar,
    Header,
  },
};
</script>
