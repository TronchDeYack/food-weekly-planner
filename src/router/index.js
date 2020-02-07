import Vue from 'vue';
import VueRouter from 'vue-router';

import MenuOfTheWeek from '../views/MenuOfTheWeek.vue';
import Recipes from '../views/Recipes.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'menu-of-the-week',
    component: MenuOfTheWeek,
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: Recipes,
  },
  {
    path: '/add-recipe',
    name: 'add-recipe',
    component: () => import('@/views/AddRecipe.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
