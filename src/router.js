import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import AddB from '@/views/AddB.vue'
import Group from '@/views/Group.vue'

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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/addbook',
      name: 'addbook',
      component: AddB
    },
    {
      path: '/group',
      name: 'group',
      component: Group

    }

  ]
})
