<template>
  <v-app-bar color="primary" app>
    <v-toolbar-title class="header-title font-weight-black">
      {{ $t('common.applicationName') }}
    </v-toolbar-title>
  </v-app-bar>
</template>

<style scoped>
.header-title {
  color: white;
  text-transform: uppercase;
}
</style>
