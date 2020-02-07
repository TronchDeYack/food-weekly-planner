<template>
  <v-bottom-navigation :fixed="true">
    <v-btn value="menu" to="/">
      <span>Menu</span>
      <v-icon>mdi-chef-hat</v-icon>
    </v-btn>

    <v-btn value="recipes" to="/recipes">
      <span>Recipes</span>
      <v-icon>mdi-noodles</v-icon>
    </v-btn>

    <v-btn value="shopping">
      <span>Shopping</span>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
