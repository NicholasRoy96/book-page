<template>
  <div class="retailers">
    <div
      v-if="currentBook.retailers && currentBook.retailers.length"
      class="retailers__container"
    >
      <h3 class="retailers__container__heading">
        You can also buy this book from the retailers below:
      </h3>
      <a
        v-for="retailer in currentBook.retailers"
        :key="retailer.label"
        :href="retailer.path"
        class="retailers__container__link"
      >
        {{ retailer.label }}
      </a>
    </div>
    <h3 v-else class="retailers__empty-heading">
      There are currently no other retailers you can purchase this book from.
    </h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Retailers',
  computed: {
    ...mapState({
      currentBook: state => state.book.currentBook
    }),
  }
}
</script>

<style lang="scss" scoped>
.retailers {
  &__container {
    display: flex;
    flex-direction: column;
    &__heading {
      font-size: var(--font-sm);
      font-weight: 500;
      margin-bottom: var(--spacer-sm);
    }
    &__link {
      color: var(--c-blue);
      &:hover {
        filter: brightness(1.4);
      }
      &:not(:last-child) {
        margin-bottom: var(--spacer-xs);
      }
    }
  }
  &__empty-heading {
    font-size: var(--font-sm);
    font-weight: 500;
  }
}
</style>