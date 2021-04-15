<template>
  <v-menu class="currency-switcher" offset-x>
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        v-bind="attrs"
        v-on="on"
        class="currency-switcher__icon"
        large
      >
        mdi-cash-multiple
      </v-icon>
    </template>
    <div
      v-for="(currency, i) in currencies"
      :key="i"
      @click="selectCurrency(currency)"
      class="currency-switcher__item"
    >
      {{ currency }}
    </div>
  </v-menu>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CurrencySwitcher',
  computed: {
    ...mapState({
      currentBook: state => state.book.currentBook
    }),
    currencies () {
      return this.currentBook.prices.map(price => {
        return price.locale
      })
    }
  },
  methods: {
    ...mapActions([ 'selectCurrency' ])
  }
}
</script>

<style lang="scss" scoped>
.currency-switcher {
  &__icon {
    color: var(--c-black);
    position: fixed;
    top: var(--spacer-xl);
    left: var(--spacer-xl);
    z-index: 1;
  }
  &__item {
    padding: var(--spacer-xs) var(--spacer-sm);
    cursor: pointer;
    transition: all 250ms ease-in-out;
    &:not(:last-child) {
      border-bottom: 1px solid var(--c-lightgrey);
    }
    &:hover {
      background: var(--c-lightgrey);
    }
  }
}
</style>