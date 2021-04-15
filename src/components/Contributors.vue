<template>
  <div>
    <span>{{ author.name }}</span>
    <p v-html="author.bio" />
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
    author () {
      const authorObj = this.currentBook.contributors.find(contributor => contributor.role_id === 'A01')
      return authorObj.contributor
    },
  }
}
</script>

<style>

</style>