import router from './index.js'

router.beforeEach((to) => {
    if(to.meta.auth){
        const {loginuser} = JSON.parse(localStorage.getItem('user') || '{}')
        if(loginuser) {
            return true
          } else {
            return '/user'
          }
    }

    if(to.name=='login' || to.name=='user' || to.name=='regist'){
        return '/'
    }

  return true
})