<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    :class="[name, icon]"
    :viewBox="`0 0 ${viewBoxSize} ${viewBoxSize}`"
    :width="width ?? size"
    :height="height ?? size"
    :role="role"
  >
    <g :fill="color">
      <path v-is="Icon"></path>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

const name = `Icon`

export default defineComponent({
  name,
  props: ['name', 'color', 'size', 'width', 'height', 'role', 'viewBoxSize'],
  setup({
    name: icon = 'default',
    color = 'black',
    size = 24,
    width,
    height,
    role = 'presentation',
    viewBoxSize = 1024,
  }) {
    const Icon = defineAsyncComponent(() => import(`../icons/${icon}.vue`))
    return { name, color, size, width, height, icon, Icon, role, viewBoxSize }
  },
})
</script>
