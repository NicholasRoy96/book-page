<template>
  <div>
    <template v-if="reviews && reviews.length">
      <div v-for="review in reviews" :key="review.id" class="review-card">
        <h3 v-html="review.reviewer" class="review-card__reviewer" />
        <p v-html="review.description" class="review-card__review" />
      </div>
    </template>
    <h3 v-else class="no-reviews">
      There are no reviews yet for this book.
    </h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Reviews',
  computed: {
    ...mapState({
      currentBook: state => state.book.currentBook
    }),
    reviews () {
      if (!this.currentBook?.reviews?.length) return null
      return this.currentBook.reviews.map(review => {
        return {
          id: review.review_id,
          description: review.review.description,
          reviewer: review.review.reviewer
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.review-card {
  &:not(:first-child) {
    padding-top: var(--spacer-sm);
  }
  &:not(:last-child) {
    padding-bottom: var(--spacer-sm);
    border-bottom: 1px solid var(--c-lightgrey);
  }
  &__reviewer {
    font-weight: bold;
    font-size: var(--font-tiny);
    margin-bottom: var(--spacer-xxs);
  }
  &__review {
    font-size: var(--font-xs);
    margin: 0;
  }
}
.no-reviews {
  font-weight: bold;
  font-size: var(--font-tiny);
}
</style>