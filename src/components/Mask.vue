<script lang="ts">
import { computed, onBeforeMount } from "vue";

import { useOpacity } from "../hooks/style";

import { toggleDrawer } from "./Drawer.vue";

export const [maskVisibility, { toggle: toggleMask }] = useOpacity()
</script>

<script lang="ts" setup>
const visibility = computed(() => ['hidden', 'visible'][maskVisibility.value])

const toggle = (close?: boolean) => {
  toggleMask(close)
  toggleDrawer(close)
}

onBeforeMount(() => {
  toggleMask(true)
})
</script>

<template lang="pug">
.Mask
  .wrap(@click="() => toggle(true)")
</template>

<style scoped>
.Mask {
  opacity: v-bind(maskVisibility);
  visibility: v-bind(visibility);

  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 8;
}

.wrap {
  backdrop-filter: blur(var(--blur--normal));
  background-color: hsla(var(--color-background--normal), 50%);

  height: 100%;
  width: 100%;
}
</style>
