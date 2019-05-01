import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    who: null,
    users_lst: null,
    lst_book: null,
    code: 123,
    bookuser: null
  },
  mutations: {
    changePage(state, selected){
      router.push(selected)
    },
    setWho(state, who){
      
      state.who = who
      console.log(state.who, who)
    },
    setUsers(state, val){
      state.users_lst = val   
      // state.users_lst = filter_
    },
    setListBook(state,val){
      state.lst_book =val
    },
    setCode(state, val){
      state.code = val
    },
    setBookUser(state, val){
      state.bookuser = val
    },
  },
  getters: {
    getCurrentPage(state){
      return router.currentRoute['name']
    },
    getWho(state){
      return state.who
    },
    getListUsers(state){
      return state.users_lst
    },
    getListBook(state){
      return state.lst_book
    },
    getCode(state){
      return state.code
    },
    getBookUser(state){
      return state.bookuser
    },
  }
})
