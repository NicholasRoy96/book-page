const state = {
  addedToCartOpen: false
}

const getters = {}

const actions = {
  toggleAddedToCart({ commit }, value) {
    commit( 'setAddedToCart', value )
  }
}

const mutations = {
  setAddedToCart( state, value ) {
    state.addedToCartOpen = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}