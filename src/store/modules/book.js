const state = {
  currentBook: {}
}

const getters = {
  currentAuthor( state ) {
    const authorObj = state.currentBook.contributors.find(contributor => contributor.role_id === 'A01')
    return authorObj.contributor
  }
}

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