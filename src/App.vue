<template>
  <div id="app">
    <Book />
  </div>
</template>

<script>
import Book from './pages/Book.vue'

export default {
  name: 'App',
  components: {
    Book
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
