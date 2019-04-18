import Vue from 'vue'
import Router from 'vue-router'
import Profile from './views/Profile.vue'
import Login from '@/views/Login.vue'
import AddB from '@/views/AddB.vue'
import Group from '@/views/Group.vue'
import Search from '@/views/Search.vue'
import Main from '@/views/main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: "main",
      component: Main,
      redirect: '/home',
      children: [
        {
          path: '/profile',
          name: 'profile',
          component: Profile
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
        },
        {
          path: '/search',
          name: 'search',
          component: Search
        },
      ]
    },
    
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
