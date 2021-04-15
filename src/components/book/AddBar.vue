<template>
  <div class="add-bar">
    <div class="add-bar__title-container">
      <img class="add-bar__title-container__image" :src="currentBook.image">
      <div>
        <h3 class="add-bar__title-container__title">
          {{ currentBook.title }}
        </h3>
        <span class="add-bar__title-container__author">
          {{ currentAuthor.name }}
        </span>
        <span class="add-bar__title-container__mobile-spacer">
          &#10072;
        </span>
        <span class="add-bar__title-container__mobile-price">
          {{ currentBook | toLocalePrice }}
        </span>
      </div>
    </div>
    <div class="add-bar__buy-container">
      <h3 class="add-bar__buy-container__price">
        {{ currentBook | toLocalePrice }}
      </h3>
      <button class="add-bar__buy-container__buy-button" @click="addToCart(currentBook)">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'AddBar',
  computed: {
    ...mapState({
      currentBook: state => state.book.currentBook
    }),
    ...mapGetters([ 'currentAuthor' ])
  },
  methods: {
    ...mapActions([ 'addToCart' ])
  }
}
</script>

<style lang="scss" scoped>
.add-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--spacer-base) var(--spacer-lg);
  background: var(--c-white);
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    left: 50%;
    bottom: var(--spacer-lg);
    width: 80%;
    transform: translateX(-40%);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  &__title-container {
    display: flex;
    @media (min-width: 1200px) {
      padding-left: var(--spacer-lg);
    }
    &__image {
      display: none;
      max-width: 45px;
      border-radius: 2px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
      margin-right: var(--spacer-base);
      @media (min-width: 1024px) {
        display: block;
      }
    }
    &__title {
      font-family: var(--font-primary);
      margin-bottom: var(--spacer-xxs);
    }
    &__author {
      color: var(--c-grey);
      font-size: var(--font-tiny);
      font-weight: 600;
    }
    &__mobile-spacer {
      color: var(--c-darkgrey);
      font-size: var(--font-tiny);
      font-weight: 600;
      margin: 0 var(--spacer-xxs);
      @media (min-width: 768px) {
        display: none;
      }
    }
    &__mobile-price {
      color: var(--c-grey);
      font-size: var(--font-tiny);
      font-weight: 600;
      @media (min-width: 768px) {
        display: none;
      }
    }
  }
  &__buy-container {
    display: flex;
    justify-content: center;
    align-items: center;
    &__price {
      display: none;
      color: var(--c-offblack);
      font-weight: 500;
      font-size: var(--font-base);
      margin-right: var(--spacer-lg);
      letter-spacing: 0.1px;
      @media (min-width: 768px) {
        display: block;
      }
    }
    &__buy-button {
      width: 100%;
      margin-top: var(--spacer-sm);
      background: var(--c-blue);
      color: var(--c-white);
      border-radius: 4px;
      padding: var(--spacer-sm) var(--spacer-2xl);
      font-size: var(--font-tiny);
      font-weight: 600;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      transition: all 250ms ease-in-out;
      border: 2px solid transparent;
      @media (min-width: 768px) {
        width: auto;
        margin-top: 0;
      }
      &:hover {
        border: 2px solid var(--c-blue);
        background: var(--c-white);
        color: var(--c-blue);
        box-shadow: none;
      }
    }
  } 
}
</style>