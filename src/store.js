import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    who: ''
  },
  mutations: {
    changePage(state, selected){
      router.push(selected)
    },
    setWho(state, who){
      
      state.who = who
      // console.log(state.who, who)
    }
  },
  getters: {
    getCurrentPage(state){
      return router.currentRoute['name']
    },
    getWho(state){
      return this.state.who
    }
  }
})
