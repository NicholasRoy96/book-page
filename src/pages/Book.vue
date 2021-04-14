<template>
  <div class="book-page">
    <section class="book-page__image">
      <img :src="bookData.image">
    </section>
    <section class="book-page__content">
      <div class="book-page__content__container">
        <span v-if="bookData.type">{{ bookData.type }}</span>
        <h1 class="book-page__content__title">{{ bookData.title }}</h1>
        <p v-html="bookData.description" />        
        <InfoTabs :bookData="bookData" />
      </div>
    </section>
  </div>
</template>

<script>
// import axios from 'axios'
import bookData from '../data.json'
import InfoTabs from '../components/InfoTabs'

export default {
  name: 'BookPage',
  data () {
    return {
      bookData
    }
  },
  components: {
    InfoTabs
  },
  computed: {
    author () {
      const authorObj = this.bookData.contributors.find(contributor => contributor.role_id === 'A01')
      return authorObj.contributor
    },
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
  flex-wrap: wrap;
  text-align: start;
  &__image {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #2b305c;
    @media (min-width: 1024px) {
      height: 100vh;
      width: 50%;
      position: fixed;
      top: 0;
      left: 0;
    }
    & > img {
      max-width: 40%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 2px;
    }    
  }
  &__content {
    width: 100%;
    background: #fff;
    @media (min-width: 1024px) {
      width: 50%;
    }
    &__container {
      padding: 64px;
      font-family: var(--font-secondary);
    }
    &__title {
      font-family: var(--font-primary);
    }
  }
}
</style>

