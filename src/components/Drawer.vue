<script lang="ts">
import { computed, onBeforeMount, ref } from "vue";

import { useOpacity, useUnitSize } from "../hooks/style";
import { baseSizePadding } from "../variables";

import { toggleMask } from "./Mask.vue";
import { fabOffsetY, fabShown } from "./FloatActionBar.vue";

const BASE_WIDTH = 240

export const [drawerWidth] = useUnitSize(BASE_WIDTH)
export const [drawerHeight, { calc }] = useUnitSize(100, '%')
export const [drawerOffsetX, { toggle: toggleOffsetX }] = useUnitSize(BASE_WIDTH + 16)
export const [drawerOpacity, { toggle: toggleOpacity }] = useOpacity(1)

export const toggleDrawer = (close?: boolean) => {
  toggleOffsetX(close)
  toggleOpacity(close)
  toggleMask(close)
}
</script>

<script lang="ts" setup>
const width = drawerWidth
const height = drawerHeight
const opacity = drawerOpacity
const offsetX = drawerOffsetX
const offsetY = calc(() => `${fabOffsetY.value} + ${fabShown.value ? baseSizePadding.value : '0px'}`)

onBeforeMount(() => {
  toggleDrawer(true)
})
</script>

<template lang="pug">
.Drawer
  .wrap
</template>

<style scoped>
.Drawer {
  height: v-bind(height);
  width: v-bind(width);

  padding-top: v-bind(offsetY);
  padding-bottom: v-bind(baseSizePadding);
  flex-direction: column;
  display: flex;

  left: calc(v-bind(width) * -1);
  top: 0;
  position: absolute;
  z-index: 10;
}

.wrap {
  opacity: v-bind(drawerOpacity);
  transform: translateX(v-bind(offsetX));
  transition: opacity 0.25s var(--transition--normal),
    transform 0.25s var(--transition--normal);

  box-shadow: var(--shadow-colored--medium);
  border-radius: var(--radius--normal);
  background-color: hsl(var(--color-background--normal));

  height: 100%;
  width: 100%;
  padding: var(--padding--normal);

  overflow-y: hidden;
}
</style>
