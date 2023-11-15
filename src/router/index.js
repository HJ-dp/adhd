import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/test.vue'
import RegistView from '../views/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/login',
      name: 'login',
      component: RegistView
    },
  ]
})

export default router
