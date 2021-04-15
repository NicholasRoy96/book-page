<template>
  <div class="book-page">
    <section class="book-page__image">
      <img :src="currentBook.image">
    </section>
    <section class="book-page__content">
      <div class="book-page__content__container">
        <span v-if="currentBook.type">
          {{ currentBook.type }}
        </span>
        <h1 class="book-page__content__title">
          {{ currentBook.title }}
        </h1>
        <h4 v-if="saleDate" class="book-page__content__sale-date">
          First sold on {{ saleDate }}
        </h4>
        <p v-html="currentBook.description" class="book-page__content__description" />        
        <InfoTabs />
      </div>
    </section>
    <AddBar />
    <CurrencySwitcher v-if="this.currentBook.prices.length > 1" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'
import bookData from '../data.json'
import InfoTabs from '../components/book/InfoTabs'
import AddBar from '../components/book/AddBar'
import CurrencySwitcher from '../components/book/CurrencySwitcher'

export default {
  name: 'BookPage',
  components: {
    InfoTabs,
    AddBar,
    CurrencySwitcher
  },
  computed: {
    ...mapState({
      currentBook: state => state.book.currentBook
    }),
    saleDate () {
      if (!this.currentBook.sale_date.date) return null
      return moment(this.currentBook.sale_date.date).format('Do MMMM YYYY')
    }
  },
  methods: {
    ...mapActions([ 'selectBook', 'addToCart', 'selectCurrency' ])
  },
  mounted () {
    this.selectBook(bookData)
    this.selectCurrency(bookData.prices[0].locale)
  }
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
    background: var(--c-offwhite);
    @media (min-width: 1024px) {
      height: 100vh;
      width: 50%;
      position: fixed;
      top: 0;
      left: 0;
    }
    & > img {
      max-width: 40%;
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
      border-radius: 2px;
    }    
  }
  &__content {
    width: 100%;
    background: var(--c-white);
    padding-bottom: 200px;
    @media (min-width: 768px) {
      padding-bottom: 150px;
    }
    @media (min-width: 1024px) {
      width: 50%;
    }
    &__container {
      padding: var(--spacer-lg);
      @media (min-width: 1024px) {
        padding: var(--spacer-2xl);
      }
    }
    &__title {
      font-family: var(--font-primary);
      font-size: var(--font-xl);
    }
    &__sale-date {
      font-size: var(--font-xs);
      font-weight: 400;
    }
    &__description {
      padding-top: var(--spacer-lg);
      font-size: var(--font-tiny);
      font-weight: 400;
      ::v-deep & p:not(:last-child) {
        padding-bottom: var(--spacer-xs);
        @media (min-width: 768px) {
          padding-bottom: var(--spacer-sm);
        }
      }
    }
  }
}
</style>

