<template>
  <div>
    <div v-if="currentBook.retailers && currentBook.retailers.length" class="retailers">
      <a
        v-for="retailer in currentBook.retailers"
        :key="retailer.label"
        :href="retailer.path"
      >
        {{ retailer.label }}
      </a>
    </div>
    <h3 v-else>
      Currently there isn't anywhere else you can purchase this book.
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
  display: flex;
  flex-direction: column;
}
</style>