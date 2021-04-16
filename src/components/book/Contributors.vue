<template>
  <div class="contributors">
    <div
      v-for="(contributor, i) in contributors"
      :key="i"
      class="contributors__card"
    >
      <div class="contributors__card__content">
        <h3 v-if="contributor.name" class="contributors__card__content__name">
          {{ contributor.name }}
        </h3>
        <p
          v-if="contributor.bio"
          v-html="author.bio"
          class="contributors__card__content__description"
        />
      </div>
      <img
        v-if="contributor.image"
        :src="contributor.image"
        class="contributors__card__image"
      >
    </div>    
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Contributors',
  computed: {
    ...mapState({
      currentBook: state => state.book.currentBook
    }),
    contributors () {
      if (!this.currentBook?.contributors?.length) return []
      return this.currentBook.contributors.map(contributor => {
        return contributor.contributor
      })
    },
    author () {
      const authorObj = this.currentBook.contributors.find(contributor => contributor.role_id === 'A01')
      return authorObj.contributor
    },
  }
}
</script>

<style lang="scss" scoped>
.contributors {
  padding-top: var(--spacer-lg);
  @media (min-width: 768px) {
    padding: var(--spacer-lg) var(--spacer-sm) 0;
  }
  &__card {
    display: flex;
    &:not(:first-child) {
      margin-top: var(--spacer-sm);
    }
    &__image {
      display: block;
      float: right;
      min-width: 100px;
      align-items: flex-start;
      filter: drop-shadow(0px 0px 1px rgba(0,0,0,.3)) drop-shadow(0px 0px 10px rgba(0,0,0,.3));
      object-fit: contain;
      object-position: top;
      padding-top: var(--spacer-sm);
    }
    &__content {
      margin-right: var(--spacer-lg);
      &__name {
        font-family: var(--font-primary);
        margin-bottom: var(--spacer-sm);
      }
      &__description {
        margin-top: var(--spacer);
        font-size: var(--font-xs);
      }
    }
  }
}
</style>