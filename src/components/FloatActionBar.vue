<script lang="ts">
import { computed } from 'vue'

import Button from './BaseButton.vue'
import Icon from './BaseIcon.vue'
import Search from './BaseSearch.vue'

import { useUnitSize } from '../hooks/style'
import { baseSizeAction } from '../variables'

export const [fabHeight] = useUnitSize(56)
export const [fabWidth] = useUnitSize(100, '%')
export const [fabOffsetY, { toggle: toggleFAB }] = useUnitSize(fabHeight.value)

export const fabShown = computed(() => fabOffsetY.value === '0px')
</script>

<script lang="ts" setup>
import { toggleDrawer } from './Drawer.vue'

const [actionSize] = useUnitSize(40)

const height = fabHeight
const width = fabWidth
</script>

<template lang="pug">
.FloatActionBar
  .wrap.__center.-axis
    Button.action.avatar
      Icon(name="account" :size="actionSize")
    Button.action
      Icon(name="all_inbox" :size="24")
    Search.search
      template(v-slot:left)
        Button.menu(@click="() => toggleDrawer()")
          Icon(name="menu" :size="24")
    Button.action
      Icon(name="sync" :size="24")
    Button.action
      Icon(name="more_vert" :size="24")
</template>

<style scoped>
.FloatActionBar {
  height: v-bind(height);
  width: v-bind(width);

  top: 0;
  left: 0;
  position: absolute;
  z-index: 7;
}

.wrap {
  height: inherit;
}

.action {
  --radius: calc(v-bind(actionSize));
  --height: v-bind(actionSize);
  --width: v-bind(actionSize);
  --padding: unset;
}
.action,
.search {
  padding: calc(v-bind(baseSizeAction) / 2 - v-bind(actionSize) / 2);
}

.action > :deep(.wrap) {
  transform: translateY(0%);
}

.search {
  --height: v-bind(actionSize);
}

.menu {
  --shadow: none;
  margin-left: -0.25em;
}
</style>
