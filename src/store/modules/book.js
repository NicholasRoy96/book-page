const state = {
  currentBook: {}
}

const getters = {}

const actions = {
  selectBook({ commit }, book) {
    commit( 'setBook', book )
  },
}

const mutations = {
  setBook( state, book ) {
    state.currentBook = book
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}