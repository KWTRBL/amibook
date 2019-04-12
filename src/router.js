import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from '@/views/About.vue'
import Detail from '@/views/Detail.vue'
import AddB from '@/views/AddB.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About 
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/addbook',
      name: 'addbook',
      component: AddB
    }

  ]
})
