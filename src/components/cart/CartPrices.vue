<template>
  <div class="cart-prices">
    <div class="cart-prices__price">
      <span>Subtotal:</span>
      <span>{{ currentCurrency }} {{ totalCartPrice }}</span>
    </div>
    <div class="cart-prices__price">
      <span>Shipping & Handling:</span>
      <span>{{ currentCurrency }} {{ testShippingCost.toFixed(2) }}</span>
    </div>
    <div class="cart-prices__price grand-total">
      <span>Grand total:</span>
      <span>{{ currentCurrency }} {{ grandTotal }}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'CartPrices',
  data () {
    return {
      testShippingCost: 3.5
    }
  },
  computed: {
    ...mapState({
      currentCurrency: state => state.currency.currency
    }),
    ...mapGetters([ 'totalCartPrice' ]),
    grandTotal () {
      return (parseFloat(this.totalCartPrice) + this.testShippingCost).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-prices {
  &__price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacer-xs);
    &.grand-total {
      font-weight: bold;
      margin-bottom: 0;
    }
  }
}
</style>