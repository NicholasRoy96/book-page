<template>
  <div>
    <v-tabs
      v-model="tabIndex"
      grow
      class="info-tabs"
      color="#126aa1"
    >
      <v-tab v-for="(tab, i) in tabKeys" :key="i">
        {{ tab }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabIndex">
      <v-tab-item
        v-for="(tab, i) in tabKeys"
        :key="i"
      >
        <component :is="tab" :bookData="bookData" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Contributors from '../components/Contributors'
import Reviews from '../components/Reviews'
import Retailers from '../components/Retailers'

export default {
  name: 'InfoTabs',
  data () {
    return {
      tabKeys: ['Contributors', 'Reviews', 'Retailers'],
      tabIndex: null
    }
  },
  props: {
    bookData: {
      type: Object,
      required: true
    }
  },
  components: {
    Contributors,
    Reviews,
    Retailers
  },
}
</script>

<style lang="scss" scoped>
.info-tabs {
  ::v-deep {
    .v-tab {
      text-transform: capitalize;
      letter-spacing: 0.5px;
      color: black;
    }
    .v-slide-group {
      &__prev {
        display: none !important;
      }
    }
  }
}
</style>