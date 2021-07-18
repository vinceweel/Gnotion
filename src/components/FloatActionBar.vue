<script lang="ts" setup>
import { useUnitSize } from '../hooks/style';
import { toggleDrawer } from "../variables";

import Button from './BaseButton.vue'
import Icon from './BaseIcon.vue'

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
  --height: v-bind(sizeIconBtn);
  --width: v-bind(sizeIconBtn);
  --radius: calc(v-bind(sizeIconBtn) / 2);
}
</style>
