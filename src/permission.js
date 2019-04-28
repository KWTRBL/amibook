import router from '@/router'
import store from '@/store'

router.beforeEach((to, from, next) => {
    console.log(store.getters.getWho)
    if(to.path == '/login'){
        next()
    }
    else if(store.getters.getWho){
        next()
    }else{
        next({ path: "/login" })
    }
})