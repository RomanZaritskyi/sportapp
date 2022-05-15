import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import Legs from '../components/legs/legs.vue';
import Back from '../components/back/back.vue';
import Chest from '../components/chest/chest.vue';
import Shoulders from '../components/shoulders/shoulders.vue';
import Abb from '../components/abb/abb.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/legs',
    name: 'Legs',
    component: Legs,
  },
  {
    path: '/back',
    name: 'Back',
    component: Back,
  },
  {
    path: '/chest',
    name: 'Chest',
    component: Chest,
  },
  {
    path: '/shoulders',
    name: 'Shoulders',
    component: Shoulders,
  },
  {
    path: '/abb',
    name: 'Abb',
    component: Abb,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
