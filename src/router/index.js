import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: () => import('../views/Intro.vue')
  },
  {
    path: '/performance',
    name: 'Performance',
    component: () => import('../views/Performance.vue')
  },
  {
    path: '/fragments',
    name: 'Fragment',
    component: () => import('../views/Fragments.vue')
  },
  {
    path: '/v-model',
    name: 'V-Model',
    component: () => import('../views/VModel.vue')
  },
  {
    path: '/reactivity',
    name: 'Reactivity',
    component: () => import('../views/Reactivity.vue')
  },
  {
    path: '/suspense',
    name: 'Suspense',
    component: () => import('../views/Suspense.vue')
  },
  {
    path: '/teleports',
    name: 'Teleport',
    component: () => import('../views/Teleports.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
