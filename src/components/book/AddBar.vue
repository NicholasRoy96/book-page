<template>
  <div class="add-bar">
    <div class="add-bar__title-container">
      <img class="add-bar__title-container__image" :src="currentBook.image">
      <div>
        <h3>
          {{ currentBook.title }}
        </h3>
        <h5>
          {{ currentAuthor.name }}
        </h5>
      </div>
    </div>
    <div>
      <button class="add-bar__buy-button" @click="addToCart(currentBook)">
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
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 50%;
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  bottom: var(--spacer-lg);
  padding: var(--spacer-base) var(--spacer-lg);
  background: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transform: translateX(-40%);
  border-radius: 4px;
  &__title-container {
    display: flex;
    padding-left: var(--spacer-lg);
    &__image {
      max-width: 45px;
      border-radius: 2px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;       
    }
  }
  &__buy-button {
    background: var(--c-blue);
    color: var(--c-white);
    border-radius: 4px;
    padding: var(--spacer-sm) var(--spacer-2xl);
    font-size: var(--font-tiny);
    font-weight: 600;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 250ms ease-in-out;
    border: 2px solid transparent;
    &:hover {
      border: 2px solid var(--c-blue);
      background: var(--c-white);
      color: var(--c-blue);
      box-shadow: none;
    }
  }
}
</style>