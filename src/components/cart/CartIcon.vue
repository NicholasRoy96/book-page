<template>
  <div class="cart-icon">
    <v-icon @click="toggleCartOpen" class="cart-icon__icon" large>
      mdi-basket-outline
    </v-icon>
    <div v-if="totalCartItems" class="cart-icon__badge">
      {{ totalCartItems }}
    </div>
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CartIcon',
  computed: {
    ...mapGetters([ 'totalCartItems' ])
  },
  methods: {
    ...mapActions([ 'toggleCartOpen' ])
  }
}
</script>

<style lang="scss" scoped>
.cart-icon {
  position: fixed;
  top: var(--spacer-xl);
  left: var(--spacer-xl);
  z-index: 1;
  @media (min-width: 1024px) {
    top: unset;
    bottom: var(--spacer-xl);
  }
  &__icon {
    color: var(--c-black);
  }
  &__badge {
    position: absolute;
    top: -12px;
    right: -10px;
    background: var(--c-greeny);
    color: white;
    border-radius: 8px;
    width: 22px;
    height: 15px;
    font-size: 10px;
    font-weight: 600;
  }
}
</style>