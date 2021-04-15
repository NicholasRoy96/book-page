<template>
  <div class="cart-panel">
    <transition name="width-fade">
      <div v-show="cartOpen" class="cart-panel__content">
        <template v-if="cartOpen">
          <button @click="toggleCartOpen">Close</button>
          <div v-for="(cartItem, i) in cartItems" :key="i">
            Title: {{ cartItem.item.title }}
            Quantity: {{ cartItem.qty }}
          </div>
        </template>
      </div>
    </transition>
    <transition name="fade">
      <div
        v-show="cartOpen"
        @click="toggleCartOpen"
        class="cart-panel__overlay"
      />
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CartPanel',
  computed: {
    ...mapState({
      cartItems: state => state.cart.cartItems,
      cartOpen: state => state.cart.cartOpen
    })
  },
  methods: {
    ...mapActions([ 'toggleCartOpen' ])
  }
}
</script>

<style lang="scss" scoped>
.cart-panel {
  &__content {
    position: fixed;
    left: 0;
    top: 0;
    transition: all 0.5s;
    width: 100%;
    height: 100vh;
    opacity: 1;
    background: wheat;
    z-index: 2;
    @media (min-width: 1024px) {
      width: 30vw;
    }
  }
  &__overlay {
    background: rgb(33, 33, 33);
    border-color: rgb(33, 33, 33);
    z-index: 1;
    opacity: 0.46;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

// Transition effects
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.width-fade-enter-active, .width-fade-leave-active {
  transition: width, opacity, .5s;
}
.width-fade-enter, .width-fade-leave-to {
  width: 0;
  opacity: 0;
}
</style>