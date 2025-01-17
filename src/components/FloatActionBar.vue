<script lang="ts">
import { computed, ref } from 'vue'

import Avatar from './BaseAvatar.vue'
import Button from './BaseButton.vue'
import Icon from './BaseIcon.vue'
import Search from './BaseSearch.vue'

import { useUnitSize } from '../hooks/style'
import { baseSizeAction } from '../variables'

export const [fabHeight] = useUnitSize(56)
export const [fabWidth] = useUnitSize(100, '%')
export const [fabOffsetY, { toggle: toggleFAB }] = useUnitSize(fabHeight.value)

export const fabIsHide = computed(() => fabOffsetY.value === '0px')
</script>

<script lang="ts" setup>
import { toggleDrawer, drawerIsHide } from './Drawer.vue'
import { toggleBrowser } from './Browser.vue'

const size = ref(40)
const [actionSize] = useUnitSize(size)
const [iconSize] = useUnitSize(24)

const height = fabHeight
const width = fabWidth
const offsetY = fabOffsetY
</script>

<template lang="pug">
.FloatActionBar
  .wrap.__center.-axis
    Button.action.avatar
      Avatar(:size="size")
    Button.action(@click="() => toggleBrowser()")
      Icon(name="all_inbox" :size="iconSize")
    Search.search
      template(v-slot:left)
        Button.action.drawer(@click="() => toggleDrawer()")
          Icon(:name="drawerIsHide ? 'menu' : 'arrow_back'" :size="iconSize")
    Button.action
      Icon(name="sync" :size="iconSize")
    Button.action
      Icon(name="more_vert" :size="iconSize")
</template>

<style scoped>
.FloatActionBar {
  height: v-bind(height);
  width: v-bind(width);

  top: calc(v-bind(height) * -1);
  left: 0;
  position: absolute;
  z-index: 9;
}
.wrap::before {
  background-image: linear-gradient(
    to bottom,
    hsl(var(--color-background--normal)),
    transparent
  );

  height: 50px;
  width: 100%;

  left: 0;
  top: 0;
  position: absolute;

  display: block;
  content: "";
}

.wrap {
  transform: translateY(v-bind(offsetY));
  transition: opacity 0.25s var(--transition--normal),
    transform 0.25s var(--transition--normal);

  height: inherit;
  width: inherit;
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

.drawer {
  --shadow: none;
  --height: v-bind(actionSize);
  --width: v-bind(actionSize);
  --padding: unset;

  padding: unset;
  margin-left: -12px;
}
</style>
