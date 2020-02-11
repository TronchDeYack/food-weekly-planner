<template>
  <v-container class="mt-3">
    <v-bottom-navigation :fixed="true">
      <v-btn value="menu" to="/">
        <span>{{ $t('navigation.menu') }}</span>
        <v-icon>mdi-chef-hat</v-icon>
      </v-btn>

      <v-btn value="recipes" to="/recipes">
        <span>{{ $t('navigation.recipes') }}</span>
        <v-icon>mdi-noodles</v-icon>
      </v-btn>

      <v-btn value="shopping" to="/shopping">
        <span>{{ $t('navigation.shopping') }}</span>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>
