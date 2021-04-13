<template>
  <div class="book-page">
    <section class="book-page__image">
      <img :src="bookData.image">
    </section>
    <section class="book-page__content">
      <div class="book-page__content__container">
        <h1>{{ bookData.title }}</h1>
        <p v-html="bookData.description" />
        <p v-html="bookData.description" />
        <p v-html="bookData.description" />
      </div>
    </section>
  </div>
</template>

<script>
// import axios from 'axios'
import bookData from '../data.json'

export default {
  name: 'BookPage',
  data () {
    return {
      bookData
    }
  }
  // async mounted () {
  //   await axios.get('https://v3-static.supadu.io/dev/products/9780060577315.json')
  //     .then(response => console.log(response))
  //     .catch(error => console.error(error))
  // }
}
</script>

<style lang="scss" scoped>
.book-page {
  display: flex;
  justify-content: flex-end;
  &__image {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background: #f7f3f3;
    & > img {
      max-width: 4  0%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 2px;
    }    
  }
  &__content {
    width: 50%;
    background: #fff;
    &__container {
      padding: 32px;
    }
  }
}
</style>

