import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'


import HomeRoutes from '@/Modules/Home/router/index'


const routes: Array<RouteRecordRaw> = [
  ...HomeRoutes.map(route => route),
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  
  routes,
});

export default router
