import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({top: 0}),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/Login.vue'),
      children:[
        {
          path: '',
          name: 'login',
          component: () => import('../components/user/login.vue'),
        },{
          path: 'regist',
          name: 'regist',
          component: () => import('../components/user/regist.vue'),
        },
      ]
    },
    {
      path: '/manager',
      name: 'manager',
      meta: {auth:true},
      component: () => import('../views/Admin.vue'),
      children:[
        {
          path: '/d',
          name: 'm',
          meta: {auth:true},
          component: () => import('../components/admin/AdminMenu.vue'),
        },
      ]
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('../views/products/Product-main.vue'),
      children:[
        {
          path: "",
          name: 'goods_List',
          component: () => import('../views/products/Product-list.vue'),
        },{
          path: ":itemcode",
          name: 'goods_List',
          component: () => import('../views/products/Product-list.vue'),
        },{
          path: "detail/:productId",
          name: 'goods_Detail',
          component: () => import('../components/Products/ProductsDetail.vue'),
        },
      ]
    },{
      path:'/mypage',
      name:'mypage',
      meta: {auth:true},
      component: () => import('../views/Mypage.vue'),
      children:[
        {
          path: "",
          name: 'mypage-main',
          meta: {auth:true},
          component: () => import('../components/mypage/Mypagecont.vue'),
        },{
          path: "/mylist",
          name: 'mylist',
          meta: {auth:true},
          component: () => import('../components/mypage/MyList.vue'),
        },{
          path: "/mycart",
          name: 'mycart',
          meta: {auth:true},
          component: () => import('../components/cart/MyCart.vue'),
        },{
          path: "/myorder",
          name: 'myorder',
          meta: {auth:true},
          component: () => import('../views/Login.vue'),
        },{
          path: "/myaddress",
          name: 'myaddress',
          meta: {auth:true},
          component: () => import('../components/mypage/MyAddressControl.vue'),
        },{
          path: "/myreview",
          name: 'myreview',
          meta: {auth:true},
          props: {type : 1},
          component: () => import('../components/mypage/Myresult.vue'),
        },{
          path: "/myquestion",
          name: 'myquestion',
          meta: {auth:true},
          props:{type : 2},
          component: () => import('../components/mypage/Myresult.vue'),
        },{
          path: "mynotice",
          name: 'mynotice',
          meta: {auth:true},
          component: () => import('../components/mypage/Mynotice.vue'),
        },{
          path: "myinfo",
          name: 'myinfo',
          meta: {auth:true},
          component: () => import('../components/mypage/MyEdit.vue'),
        },
      ]
    },{
        path: "/purchase",
        name: 'purchase',
        meta: {auth:true},
        component: () => import('../views/purchase/PurchaseView.vue'),
        children:[
          {
            path: "",
            name: 'order',
            meta: {auth:true},
            component: () => import('../views/purchase/order.vue'),
          },{
            path: "/success",
            name: 'success',
            meta: {auth:true},
            component: () => import('../views/purchase/success.vue'),
          },{
            path: "/fail",
            name: 'fail',
            meta: {auth:true},
            component: () => import('../views/purchase/fail.vue'),
          }
        ]
    },

    /* 404 페이지 */
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/NotFound.vue'),
    },
  ]
})

export default router
