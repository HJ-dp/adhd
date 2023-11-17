import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistView from '../views/regist.vue'
import ProductView from '../views/products/Product-main.vue';
import goods_ListView from '../views/products/Product-list.vue'
import goods_Detail from '../components/Products/ProductsDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: 'slide-left' },
    },{
      path: '/login',
      name: 'login',
      component: RegistView
    },{
      path: '/goods',
      name: 'goods',
      component: ProductView, 
      children:[
        {
          path: "",
          name: 'goods_List',
          component: goods_ListView
        },{
          path: ":itemcode",
          name: 'goods_List',
          component: goods_ListView
        },{
          path: "detail/:productId",
          name: 'goods_Detail',
          component: goods_Detail
        },

      ]
    },
  ]
})

export default router
