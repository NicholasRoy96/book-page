import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import book from './modules/book'
import cart from './modules/cart'
// import modals from './modules/modals'
// import loaders from './modules/loaders'

Vue.use( Vuex )

export default new Vuex.Store({
  modules: {
    book,
    cart
  },
  plugins: [
    createPersistedState({})
  ]
})