<template>
  <div class="cart-item">
    <div class="cart-item__aside">
      <img :src="cartItem.item.image">
    </div>
    <div class="cart-item__main">
      <h3>
        {{ cartItem.item.title }}
      </h3>
      <h5>
        {{ author }}
      </h5>
      <h5>
        Quantity: {{ cartItem.qty }}
      </h5>
      <h5>
        {{ price.currency }}
        {{ price.value }}
      </h5>
    </div>
    <v-icon
      class="cart-item__remove-button"
      @click="removeFromCart(cartItem)"
    >
      mdi-delete
    </v-icon>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { formatCurrency, findBookAuthor } from '@/helpers'

export default {
  name: 'CartItem',
  props: {
    cartItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    price () {
      const priceObj =  formatCurrency(this.cartItem.item)
      const totalPrice = (priceObj.value * this.cartItem.qty).toFixed(2)
      return {
        currency: priceObj.currency,
        value: totalPrice
      }
    },
    author () {
      return findBookAuthor(this.cartItem.item).name
    }
  },
  methods: {
    ...mapActions([ 'removeFromCart' ])
  },
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  position: relative;
  width: 100%;
  margin: var(--spacer-sm) 0;
  &__aside {
    width: 25%;
    & > img {
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }
  }
  &__main {
    width: 75%;
    padding-left: var(--spacer-sm);
  }
  &__remove-button {
    position: absolute;
    bottom: var(--spacer-sm);
    right: var(--spacer-sm);
  }
}
</style>