<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="[name, icon]"
    :viewBox="`0 0 ${vbs} ${vbs}`"
    :width="width ?? size"
    :height="height ?? size"
  >
    <g :fill="color">
      <path v-is="Icon" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

const name = `Icon`

export default defineComponent({
  name,
  props: ['name', 'color', 'size', 'width', 'height', 'vbs'],
  setup({
    name: icon = 'default',
    color = 'black',
    size = 24,
    width,
    height,
    vbs = 24,
  }) {
    const Icon = defineAsyncComponent(() => import(`../icons/${icon}.vue`))
    return { name, color, size, width, height, icon, Icon, vbs }
  },
})
</script>
