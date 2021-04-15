<template>
  <v-app id="app">
    <CartPanel />
    <Book />
  </v-app>
</template>

<script>
import Book from './pages/Book.vue'
import CartPanel from './components/cart/CartPanel'

export default {
  name: 'App',
  components: {
    Book,
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
  ::v-deep {
    .v-menu__content {
      margin-left: 12px;
    }
  }
}
</style>
