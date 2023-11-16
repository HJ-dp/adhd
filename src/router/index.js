import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistView from '../views/Login.vue'
import ProductView from '../views/products/Product-main.vue';
import goods_ListView from '../views/products/Product-list.vue'
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
    },{
      path: '/goods',
      name: 'goods',
      component: ProductView,
      props: {'type':1},
      children:[
        {
          path: "/goods/:itemcode",
          name: 'goods_List',
          component: goods_ListView
        },

      ]
    },
  ]
})

export default router
