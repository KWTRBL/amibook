import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
    changePage(state, selected){
      router.push(selected)
    }
  },
  getters: {
    getCurrentPage(state){
      return router.currentRoute['name']
    }
  }
})
