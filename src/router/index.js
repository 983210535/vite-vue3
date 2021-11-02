import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/home.vue")
  },
  {
    path: '/play/:name?/:like?',
    name: 'play',
    component: () => import("../views/play.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router