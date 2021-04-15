<template>
  <div>
    <template v-if="reviews && reviews.length">
      <div v-for="review in reviews" :key="review.id">
        <p v-html="review.description" />
        <span v-html="review.reviewer" />
      </div>
    </template>
    <h3 v-else>
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

<style>

</style>