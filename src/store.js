import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    who: null,
    users_lst: null
  },
  mutations: {
    changePage(state, selected){
      router.push(selected)
    },
    setWho(state, who){
      
      state.who = who
      // console.log(state.who, who)
    },
    setUsers(state, val){
      val.forEach(el => {
        if(el.id == state.who){
          // console.log("eeee")
          state.users_lst = el
        }
      });
      // state.users_lst = filter_
    }
  },
  getters: {
    getCurrentPage(state){
      return router.currentRoute['name']
    },
    getWho(state){
      return state.who
    }
  }
})
