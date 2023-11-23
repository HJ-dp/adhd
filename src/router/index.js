import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import Loginform from '../components/user/login.vue'
import Registform from '../components/user/regist.vue'
import ProductView from '../views/products/Product-main.vue';
import goods_ListView from '../views/products/Product-list.vue'
import goods_Detail from '../components/Products/ProductsDetail.vue'
import MypageView from '../views/Mypage.vue';
import Mypage_list from '../components/mypage/Mypagecont.vue';
import myreviews from '../components/mypage/Myresult.vue'
import myaddress from '../components/mypage/MyAddress.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView,
    },
    {
      path: '/user',
      name: 'user',
      component: LoginView,
      children:[
        {
          path: '',
          name: 'login',
          component: Loginform,
        },{
          path: 'regist',
          name: 'regist',
          component: Registform,
        },
      ]
    },
    {
      path: '/manager',
      name: 'manager',
      component: adminView,
      children:[
        {
          path: '/d',
          name: 'm',
          component: adminmenu,
        },
      ]
    },
    {
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
        },{
          path: "/mylist",
          name: 'mylist',
          component: Myfav,
        },{
          path: "/mycart",
          name: 'mycart',
          component: Mycart,
        },{
          path: "/myorder",
          name: 'myorder',
          component: Mypage_list,
        },{
          path: "/myaddress",
          name: 'myaddress',
          component: myaddress,
        },{
          path: "/myreview",
          name: 'myreview',
          props: {type : 1},
          component: myreviews,
        },{
          path: "/myquestion",
          name: 'myquestion',
          props:{type : 2},
          component: myreviews,
        },{
          path: "mynotice",
          name: 'mynotice',
          component: Notice,
        },{
          path: "myinfo",
          name: 'myinfo',
          component: Mypage_info,
        },
      ]
    }
  ]
})

export default router
