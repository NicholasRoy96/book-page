<template>
  <div>
    <!-- <v-tabs
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
        <component :is="tab" />
      </v-tab-item>
    </v-tabs-items> -->
    <v-expansion-panels flat class="info-panels">
    <v-expansion-panel
      v-for="(panel, i) in panelKeys"
      :key="i"
    >
      <v-expansion-panel-header>
        {{ panel }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <component :is="panel" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </div>
</template>

<script>
import Contributors from './Contributors'
import Reviews from './Reviews'
import Retailers from './Retailers'

export default {
  name: 'InfoTabs',
  data () {
    return {
      panelKeys: ['Contributors', 'Reviews', 'Retailers']
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
.info-panels {
  z-index: 0;
  ::v-deep {
    .v-expansion-panel-header {
      padding: var(--spacer-sm) 0;
    }
    .v-expansion-panel-content__wrap {
      padding: var(--spacer-sm) 0;
    }
  }
}
</style>