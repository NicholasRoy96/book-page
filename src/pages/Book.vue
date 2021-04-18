<template>
  <div class="book-page">
    <section class="book-page__image">
      <div class="book-page__image__actions">
        <CurrencySwitcher v-if="this.currentBook && this.currentBook.prices.length > 1" />
        <CartIcon />
      </div>
      <CoolLightBox 
        :items="[ currentBook.image ]" 
        :index="lightboxIndex"
        @close="lightboxIndex = null"
        class="book-page__image__lightbox"
      >
      </CoolLightBox>
      <img :src="currentBook.image" @click="lightboxIndex = 0">
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
        <Formats />
        <p v-html="currentBook.description" class="book-page__content__description" />        
        <InfoPanels v-show="lightboxIndex !== 0" />
      </div>
    </section>
    <AddBar v-show="lightboxIndex !== 0" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import moment from 'moment'
import bookData from '@/data.json'
import CartIcon from '@/components/cart/CartIcon'
import InfoPanels from '@/components/book/InfoPanels'
import AddBar from '@/components/book/AddBar'
import CurrencySwitcher from '@/components/book/CurrencySwitcher'
import Formats from '@/components/book/Formats'

export default {
  name: 'BookPage',
  data () {
    return {
      lightboxIndex: null
    }
  },
  components: {
    CoolLightBox,
    CartIcon,
    InfoPanels,
    AddBar,
    CurrencySwitcher,
    Formats
  },
  computed: {
    ...mapState({
      currentBook: state => state.book.currentBook
    }),
    saleDate () {
      if (!this.currentBook.sale_date.date) return null
      return moment(this.currentBook.sale_date.date).format('Do MMMM YYYY')
    },
    formats () {
      if (!this.currentBook?.formats?.length) return null
      const formatArr = this.currentBook.formats.map(format => {
        return format.format.name
      })
      return new Set([...formatArr])
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
    height: 79vh;
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
    &__lightbox {
      ::v-deep {
        .cool-lightbox__slide__img {
          max-width: 80%;
        }
      }
    }
    & > img {
      max-width: 50%;
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
      border-radius: 2px;
      @media (min-width: 768px) {
        max-width: 40%;
      }
      &:hover {
        cursor: zoom-in;
      }
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
      padding: var(--spacer-lg) 0 var(--spacer-xs);
      font-size: var(--font-xs);
      font-weight: 400;
      @media (min-width: 768px) {
        font-size: var(--font-tiny);
      }
    }
  }
}
</style>
