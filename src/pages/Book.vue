<template>
  <div class="book-page">
    <section class="book-page__image">
      <div class="book-page__image__actions">
        <CurrencySwitcher v-if="this.currentBook && this.currentBook.prices.length > 1" />
        <CartIcon />
      </div>
      <img :src="currentBook.image">
    </section>
    <section class="book-page__content">
      <div class="book-page__content__container">
        <button v-if="currentBook.type" class="book-page__content__back-button">
          <v-icon class="book-page__content__back-button__icon" small>
            mdi-arrow-left
          </v-icon>
          <span>
            Back to {{ currentBook.type }}
          </span>
        </button>
        <h1 class="book-page__content__title">
          {{ currentBook.title }}
        </h1>
        <h4 v-if="saleDate" class="book-page__content__sale-date">
          Released {{ saleDate }}
        </h4>
        <p v-html="currentBook.description" class="book-page__content__description" />        
        <InfoTabs />
      </div>
    </section>
    <AddBar />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'
import bookData from '../data.json'
import CartIcon from '../components/cart/CartIcon'
import InfoTabs from '../components/book/InfoTabs'
import AddBar from '../components/book/AddBar'
import CurrencySwitcher from '../components/book/CurrencySwitcher'

export default {
  name: 'BookPage',
  components: {
    CartIcon,
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
    position: relative;
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
    &__actions {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      padding: var(--spacer-xl);
      @media (min-width: 1024px) {
        bottom: 0;
        right: unset;
        flex-direction: column;
        height: 100%;
      }
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
    &__back-button {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--c-midblue);
      letter-spacing: -0.3px;
      font-weight: 700;
      font-size: var(--font-tiny);
      &__icon {
        color: var(--c-midblue);
        margin-right: var(--spacer-xs);
      }
    }
    &__title {
      font-family: var(--font-primary);
      font-size: var(--font-xl);
      line-height: 1.2;
      margin: var(--spacer-lg) 0 var(--spacer-xxs);
      @media(min-width: 1024px) {
        font-size: var(--font-2xl);
      }
    }
    &__sale-date {
      color: var(--c-grey);
      font-size: var(--font-tiny);
      font-weight: 600;
    }
    &__description {
      padding: var(--spacer-lg) 0 var(--spacer-sm);
      font-size: var(--font-xs);
      font-weight: 400;
      @media (min-width: 768px) {
        font-size: var(--font-tiny);
      }
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
