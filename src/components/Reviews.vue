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
export default {
  name: 'Reviews',
  props: {
    bookData: {
      type: Object,
      required: true
    }
  },
  computed: {
    reviews () {
      if (!this.bookData?.reviews?.length) return null
      return this.bookData.reviews.map(review => {
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