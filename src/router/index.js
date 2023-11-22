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
import myaddress from '../components/mypage/MyAddressControl.vue'
import Mypage_info from '../components/mypage/MyEdit.vue'
import Notice from '../components/mypage/Mynotice.vue'
import adminView from '../views/Admin.vue'
import adminmenu from '../components/admin/AdminMenu.vue'
import Myfav from '../components/mypage/MyList.vue';

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
    },
    {
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
          component: Mypage_list,
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
    },
    /* 404 페이지 */
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/NotFound.vue'), // 404 페이지 컴포넌트 경로에 맞게 수정
    },
  ]
})

export default router
