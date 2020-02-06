import Vue from 'vue';
import VueRouter from 'vue-router';
import MenuOfTheWeek from '../views/MenuOfTheWeek.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'menu-of-the-week',
    component: MenuOfTheWeek,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
