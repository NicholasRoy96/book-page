<template>
  <v-icon @click="toggleCartOpen" class="cart-icon">
    mdi-basket-outline
  </v-icon>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartIcon',
  methods: {
    ...mapActions([ 'toggleCartOpen' ])
  }
}
</script>

<style lang="scss" scoped>
.cart-icon {
  position: fixed;
  top: 0;
  right: 200px;
}
</style>