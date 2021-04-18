<template>
  <div class="added-to-cart">
    <transition name="fast-fade">
      <div v-if="modalOpen" class="added-to-cart__modal">
        <div class="added-to-cart__modal__heading">
          <h1 class="added-to-cart__modal__heading__title">
            Added to cart!
          </h1>
          <v-icon color="success">
            mdi-check-circle
          </v-icon>
        </div>
        <div class="added-to-cart__modal__content">
          <img class="added-to-cart__modal__content__image" :src="currentBook.image">
          <div>
            <h3 class="added-to-cart__modal__content__title">
              {{ currentBook.title }}
            </h3>
            <h5 class="added-to-cart__modal__content__author">
              {{ author }}
            </h5>
            <h5 class="added-to-cart__modal__content__price">
              {{ currentBook | toLocalePrice }}
            </h5>
          </div>
        </div>
        <div class="added-to-cart__modal__buttons">
          <button @click="toggleAddedToCart(false)" class="added-to-cart__modal__buttons__continue">
            Continue Shopping
          </button>
          <button @click="openCart" class="added-to-cart__modal__buttons__cart">
            Open Cart
          </button>
        </div>
        <v-btn
          @click="toggleAddedToCart(false)"
          class="added-to-cart__modal__close-button"
          fab
          dark
          x-small
          color="grey darken-3"
        >
          <v-icon dark>
            mdi-close
          </v-icon>
        </v-btn>
      </div>
    </transition>
    <transition name="fast-fade">
      <div
        v-if="modalOpen"
        @click="toggleAddedToCart(false)"
        class="added-to-cart__overlay"
      />
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { findBookAuthor } from '@/helpers'

export default {
  name: 'AddedToCart',
  computed: {
    ...mapState({
      modalOpen: state => state.modals.addedToCartOpen,
      currentBook: state => state.book.currentBook
    }),
    author () {
      return findBookAuthor(this.currentBook).name
    }
  },
  methods: {
    ...mapActions([ 'toggleAddedToCart', 'toggleCartOpen' ]),
    openCart() {
      this.toggleAddedToCart(false)
      this.toggleCartOpen()
    }
  }
}
</script>

<style lang="scss" scoped>
.added-to-cart {
  &__modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background: var(--c-white);
    min-width: 350px;
    max-width: 500px;
    border-radius: 4px;
    padding: var(--spacer-base) var(--spacer-lg);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &__heading {
      display: flex;
      margin-bottom: var(--spacer-lg);
      &__title {
        font-family: var(--font-primary);
        font-size: var(--font-base);
        margin-right: var(--spacer-xs);
      }
    }
    &__content {
      display: flex;
      text-align: start;
      &__image {
        width: 20%;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin-right: var(--spacer-sm);
      }
      &__title {
        color: var(--c-offblack);
        font-family: var(--font-primary);
        font-size: var(--font-sm);
        line-height: 1;
        font-weight: 600;
      }
      &__author {
        color: var(--c-grey);
        font-size: var(--font-tiny);
        font-weight: 600;
        margin-bottom: var(--spacer-xs);
      }
      &__price {
        color: var(--c-offblack);
        font-weight: 400;
        font-size: var(--font-tiny);
      }
    }
    &__buttons {
      margin-top: var(--spacer-lg);
      display: flex;
      flex-flow: wrap;
      @media (min-width: 768px) {
        flex-flow: unset;
      }
      &__continue {
        width: 100%;
        background: var(--c-white);
        color: var(--c-blue);
        border-radius: 4px;
        padding: var(--spacer-sm) var(--spacer-xs);
        font-size: var(--font-xs);
        font-weight: 600;
        transition: all 250ms ease-in-out;
        border: 2px solid var(--c-blue);
        margin: 0 0 var(--spacer-xs) 0;
        @media (min-width: 768px) {
          width: 50%;
          margin: 0 var(--spacer-xs) 0 0;
        }
        &:hover {
          border: 2px solid transparent;
          background: var(--c-blue);
          color: var(--c-white);
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
      }
      &__cart {
        width: 100%;
        background: var(--c-blue);
        color: var(--c-white);
        border-radius: 4px;
        padding: var(--spacer-sm) var(--spacer-xs);
        font-size: var(--font-xs);
        font-weight: 600;
        transition: all 250ms ease-in-out;
        border: 2px solid transparent;
        @media (min-width: 768px) {
          width: 50%;
          margin-left: var(--spacer-xs);
        }
        &:hover {
          border: 2px solid var(--c-blue);
          background: var(--c-white);
          color: var(--c-blue);
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
      }
    }
    &__close-button {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
  &__overlay {
    background: rgb(33, 33, 33);
    border-color: rgb(33, 33, 33);
    z-index: 1;
    opacity: 0.46;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
// Transition effects
.fast-fade-enter-active, .fast-fade-leave-active {
  transition: opacity .2s;
}
.fast-fade-enter, .fast-fade-leave-to {
  opacity: 0;
}
</style>