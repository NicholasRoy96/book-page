<template>
  <div>
    <transition name="width-fade">
      <div v-show="cartOpen" class="cart-panel">
        <template v-if="cartOpen">
          <div class="cart-panel__content">
            <template v-if="totalCartItems">
              <div class="cart-panel__content__top">
                <span>My Cart</span>
                <span>Total items: {{ totalCartItems }}</span>
                <button @click="toggleCartOpen">Close</button>
              </div>
              <section class="cart-panel__content__main">
                <CartItem
                  v-for="(cartItem, i) in cartItems"
                  :key="i"
                  :cartItem="cartItem"
                />
              </section>
              <div class="cart-panel__content__bottom">
                <CartPrices />
                <button class="cart-panel__content__bottom__checkout-button">
                  Secure Checkout
                  <v-icon small class="cart-panel__content__bottom__checkout-button__icon">
                    mdi-lock
                  </v-icon>
                </button>
              </div>
            </template>
            <template v-else>
              There are currently no items in you cart.
            </template>
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
import { mapState, mapGetters, mapActions } from 'vuex'
import CartItem from './CartItem'
import CartPrices from './CartPrices'

export default {
  name: 'CartPanel',
  components: {
    CartItem,
    CartPrices
  },
  computed: {
    ...mapState({
      cartItems: state => state.cart.cartItems,
      cartOpen: state => state.cart.cartOpen
    }),
    ...mapGetters([ 'totalCartItems' ]),
    grandTotal () {
      return (parseFloat(this.totalCartPrice) + this.testShippingCost).toFixed(2)
    }
  },
  methods: {
    ...mapActions([ 'toggleCartOpen' ])
  }
}
</script>

<style lang="scss" scoped>
.cart-panel {
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.5s;
  width: 100%;
  height: 100vh;
  opacity: 1;
  background: var(--c-white);
  z-index: 2;
  text-align: start;
  box-shadow: 8px 5px 5px -7px rgba(0,0,0,0.32);
  @media (min-width: 1024px) {
    width: 30vw;
  }
  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    &__top {
      padding: var(--spacer-lg);
    }
    &__main {
      padding: 0 var(--spacer-lg);
    }
    &__bottom {
      padding: var(--spacer-base);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      @media (min-width: 768px) {
        padding: var(--spacer-lg);
      }
      &__checkout-button {
        width: 100%;
        margin-top: var(--spacer-base);
        background: var(--c-blue);
        color: var(--c-white);
        border-radius: 4px;
        padding: var(--spacer-sm) var(--spacer-2xl);
        font-size: var(--font-sm);
        font-weight: 600;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transition: all 250ms ease-in-out;
        border: 2px solid transparent;
        &:hover{
          border: 2px solid var(--c-blue);
          background: var(--c-white);
          color: var(--c-blue);
          box-shadow: none;
        }
        &:hover &__icon {
          color: var(--c-blue);
        }
        &__icon {
          color: var(--c-white);
          transition: all 250ms ease-in-out;
          margin-left: var(--spacer-xxs);
          margin-bottom: 2px;
        }
      }
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