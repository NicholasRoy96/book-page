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

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
