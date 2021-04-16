<template>
  <div class="cart-item">
    <div class="cart-item__aside">
      <img :src="cartItem.item.image">
    </div>
    <div class="cart-item__main">
      <div>
        <h3 class="cart-item__main__title">
          {{ cartItem.item.title }}
        </h3>
        <h5 class="cart-item__main__author">
          {{ author }}
        </h5>
      </div>
      <div>
        <h5 class="cart-item__main__quantity">
          <strong>Quantity: </strong>
          {{ cartItem.qty }}
        </h5>
        <h5 class="cart-item__main__price">
          <strong>{{ price.currency }} </strong>
          {{ price.value }}
        </h5>
      </div>
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 75%;
    padding: 0 0 var(--spacer-xs) var(--spacer-base);
    @media (min-width: 768px) {
      padding: var(--spacer-sm) 0 var(--spacer-sm) var(--spacer-base);
    }
    @media (min-width: 1024px) {
      padding: 0 0 var(--spacer-sm) var(--spacer-base);
    }
    &__title {
      font-family: var(--font-primary);
      font-size: var(--font-sm);
      line-height: 1;
      @media (min-width: 768px) {
        font-size: var(--font-m);
        line-height: 1.3;
      }
    }
    &__author {
      color: var(--c-grey);
      font-size: var(--font-xs);
      font-weight: 600;
    }
    &__quantity {
      color: var(--c-black);
      font-size: var(--font-xs);
      font-weight: 400;
      @media (min-width: 768px) {
        font-size: var(--font-tiny);
        margin-bottom: var(--spacer-sm);
      }
      @media (min-width: 1024px) {
        margin-bottom: var(--spacer-xxs);
      }
      @media (min-width: 1400px) {
        margin-bottom: var(--spacer-xs);
      }
    }
    &__price {
      color: var(--c-black);
      font-size: var(--font-xs);
      font-weight: 400;
      @media (min-width: 768px) {
        font-size: var(--font-tiny);
      }
    }
  }
  &__remove-button {
    position: absolute;
    bottom: var(--spacer-xs);
    right: 0;
    @media (min-width: 768px) {
      bottom: var(--spacer-sm);
      right: var(--spacer-sm);
    }
  }
}
</style>