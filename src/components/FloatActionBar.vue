<script lang="ts">
import Button from './BaseButton.vue'
import Icon from './BaseIcon.vue'

import { useUnitSize } from '../hooks/style';

import { toggleDrawer } from "./Drawer.vue";

export const [fabHeight] = useUnitSize(56)
export const [fabOffsetY, { toggle: toggleFAB }] = useUnitSize(fabHeight.value)
</script>

<script lang="ts" setup>

const [sizeIconBtn] = useUnitSize(32)
</script>

<template lang="pug">
nav(class="component")
  .wrap
    Button.action(@click="() => toggleDrawer()")
      Icon(name="account" :size="sizeIconBtn")
</template>

<style scoped>
.component {
  position: absolute;
  z-index: 7;
}

.wrap {
  background-color: var(--color-background--normal);
}

.action {
  --radius: calc(v-bind(sizeIconBtn) / 2);
  --height: v-bind(sizeIconBtn);
  --width: v-bind(sizeIconBtn);
  --padding: unset;
}

.action > :deep(.wrap) {
  transform: translateY(0%);
}
</style>
