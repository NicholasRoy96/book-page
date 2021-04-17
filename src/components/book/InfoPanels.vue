<template>
  <div>
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
      font-size: var(--font-sm);
      font-weight: 600;
    }
    .v-expansion-panel-content__wrap {
      padding: 0;
    }
  }
}
</style>