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
        {{ cartItem.qty }}
      </h5>
      <h5>
        {{ price.currency }}
        {{ price.value }}
      </h5>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from '@/helpers'

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
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  width: 100%;
  padding: var(--spacer-sm) 0;
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
}
</style>