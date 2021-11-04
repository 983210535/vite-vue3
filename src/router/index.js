import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/home.vue")
  },
  {
    path: '/newShop',
    name: 'newShop',
    component: () => import("../views/newShop.vue")
  },
  {
    path: '/hotShop',
    name: 'hotShop',
    component: () => import("../views/hotShop.vue")
  },
  {
    path: '/shoppingCar',
    name: 'shoppingCar',
    component: () => import("../views/shoppingCar.vue")
  },
  {
    path: '/play/:name?/:like?',
    name: 'play',
    component: () => import("../views/play.vue")
  }
]

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(),
  routes
})

export default router