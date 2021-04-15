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
  position: relative;
  &__icon {
    color: var(--c-black) !important;
  }
  &__badge {
    position: absolute;
    top: -12px;
    right: -10px;
    text-align: center;
    background: var(--c-greeny);
    color: white;
    border-radius: 8px;
    width: 23px;
    height: 17px;
    font-size: 10px;
    font-weight: 600;
  }
}
</style>