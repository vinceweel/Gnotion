<script lang="ts">
import { useToggle } from '../hooks/global'

export const [showBrowser, { toggle: toggleBrowser }] = useToggle(false)
</script>

<script lang="ts" setup>
import Space from './BaseSpace.vue'
import Data from './BaseData.vue'
import ListItem from './BrowserListItem.vue'

import { fabHeight } from './FloatActionBar.vue'

</script>

<template lang="pug">
.Browser
  .wrap
    Space(:height="fabHeight")
    Data(name="articles" v-slot="[list]")
      template(v-for="(item, n) of list" :key="n")
        ListItem(:data="item")
        Space(height="8")
      Space(height="48")
</template>

<style scoped>
.Browser {
  background-color: hsl(var(--color-background--normal));

  height: 100%;
  width: 100%;

  overflow-x: hidden;
  overflow-y: auto;

  position: absolute;
  z-index: 5;
}

.wrap {
  padding: 0 var(--padding--normal);
}
</style>
