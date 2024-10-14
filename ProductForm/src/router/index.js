// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ProductsPage from '@/pages/ProductsPage.vue';

const routes = [
  { path: '/home', component: HomePage },
  { path: '/products', component: ProductsPage },
  { path: '/', redirect: '/home' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
