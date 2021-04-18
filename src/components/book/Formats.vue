<template>
  <div v-if="formats" class="formats">
    <h4 class="formats__heading">
      Formats
    </h4>
    <div class="formats__item-container">
      <v-chip
        v-for="(format, i) in formats"
        :key="i"
        class="formats__item-container__item"
        outlined
      >
        {{ format }}
      </v-chip>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Formats',
  computed: {
    ...mapState({
      currentBook: state => state.book.currentBook
    }),
    formats () {
      if (!this.currentBook?.formats?.length) return null
      const formatArr = this.currentBook.formats.map(format => {
        return format.format.name
      })
      return new Set([...formatArr])
    }
  },
}
</script>

<style lang="scss" scoped>
.formats {
  margin: var(--spacer-lg) 0 var(--spacer-sm);
  &__heading {
    font-weight: 600;
    font-size: var(--font-tiny);
    color: var(--c-offblack);
  }
  &__item-container {
    display: flex;
    overflow-x: scroll;
    @media (min-width: 768px) {
      flex-wrap: wrap;
    }
    &__item {
      width: 110px;
      min-width: 110px;
      font-size: var(--font-xs) !important;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      justify-content: center;
      margin-top: var(--spacer-xs);
      box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
      &:not(:last-child) {
        margin-right: var(--spacer-sm);
      }
      ::v-deep .v-chip__content {
        height: auto;
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
      }
    }
  }
}

</style>