<template>
  <div>
    <div v-if="bookData.retailers && bookData.retailers.length" class="retailers">
      <a
        v-for="retailer in bookData.retailers"
        :key="retailer.label"
        target="_blank"
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
export default {
  name: 'Retailers',
  props: {
    bookData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.retailers {
  display: flex;
  flex-direction: column;
}
</style>