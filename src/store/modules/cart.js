const state = {
  cartItems: [],
  cartOpen: false
}

const getters = {}

const actions = {
  addToCart({ commit, state, dispatch }, item) {
    if (!state.cartItems.length) {
      commit('setCart', [{
        item,
        qty: 1
      }])
      return
    }
    if (!state.cartItems.some(cartItem => cartItem.item.product_id === item.product_id)) {
      const newCart = [...state.cartItems, {
        item,
        qty: 1
      }]
      commit('setCart', newCart)
      return
    }
    dispatch('updateCartQuantity', item)
  },
  updateCartQuantity({ commit, state }, item) {
    const updatedCartItems = state.cartItems.map(cartItem => {
      if (cartItem.item.id === item.id) {
        cartItem.qty +=1
      }
      return cartItem
    })
    commit('setCart', updatedCartItems)
  },
  toggleCartOpen({ commit }) {
    commit('setCartOpen')
  }
}

const mutations = {
  setCart( state, items ) {
    state.cartItems = items
  },
  setCartOpen( state ) {
    state.cartOpen = !state.cartOpen
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}