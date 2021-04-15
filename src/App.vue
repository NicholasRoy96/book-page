<template>
  <v-app id="app">
    <CartIcon />
    <CartPanel />
    <Book />
  </v-app>
</template>

<script>
import Book from './pages/Book.vue'
import CartIcon from './components/cart/CartIcon'
import CartPanel from './components/cart/CartPanel'

export default {
  name: 'App',
  components: {
    Book,
    CartIcon,
    CartPanel
  }
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}

#app {
  font-family: var(--font-secondary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--c-black);
  font-weight: 500;
}
</style>
