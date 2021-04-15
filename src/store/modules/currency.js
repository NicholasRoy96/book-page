const state = {
  currency: null
}

const getters = {}

const actions = {
  selectCurrency({ commit }, currency) {
    commit( 'setCurrency', currency )
  }
}

const mutations = {
  setCurrency( state, currency ) {
    state.currency = currency
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}