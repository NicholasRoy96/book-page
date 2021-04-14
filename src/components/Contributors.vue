<template>
  <div>
    <span>{{ author.name }}</span>
    <p v-html="author.bio" />
  </div>
</template>

<script>
export default {
  name: 'Contributors',
  props: {
    bookData: {
      type: Object,
      required: true
    }
  },
  computed: {
    author () {
      const authorObj = this.bookData.contributors.find(contributor => contributor.role_id === 'A01')
      return authorObj.contributor
    },
  }
}
</script>

<style>

</style>