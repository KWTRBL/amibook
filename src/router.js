import Vue from 'vue'
import Router from 'vue-router'
import Profile from './views/Profile.vue'
import Login from '@/views/Login.vue'
import AddB from '@/views/AddB.vue'
import Group from '@/views/Group.vue'
import Search from '@/views/Search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/',
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
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },

  ]
})
