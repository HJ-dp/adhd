import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import Loginform from '../components/user/login.vue'
import Registform from '../components/user/regist.vue'
import ProductView from '../views/products/Product-main.vue';
import goods_ListView from '../views/products/Product-list.vue'
import goods_Detail from '../components/Products/ProductsDetail.vue'
import MypageView from '../views/Mypage.vue';
import Mypage_list from '../views/Mypage.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      
    },{
      path: '/user',
      name: 'user',
      component: LoginView,
      children:[
        {
          path: '',
          name: 'login',
          component: Loginform,
          meta: { transition: 'slide-left' },
        },{
          path: 'regist',
          name: 'regist',
          component: Registform,
          meta: { transition: 'slide-rigth' },
        },
      ]
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
    },{
      path:'/mypage',
      name:'mypage',
      component:MypageView,
      children:[
        {
          path: "",
          name: 'mypage-main',
          component: Mypage_list,
        },
      ]
    }
  ]
})

export default router
