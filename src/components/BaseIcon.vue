<script lang="ts">
export default {
  name: 'Icon'
}
</script>

<script lang="ts" setup>
import { computed, defineAsyncComponent, toRefs } from 'vue'
import type { Component } from 'vue'
import pascalcase from 'pascalcase'
import * as Icons from './icons'

const props = defineProps({
  name: {
    type: String,
    default: 'Default'
  },
  color: {
    type: String,
    default: 'black'
  },
  size: {
    type: [String, Number],
    default: 24
  },
  width: [String, Number],
  height: [String, Number],
  viewBoxSize: {
    type: [String, Number],
    default: 24
  }
})

const { name: icon, size, width, height, viewBoxSize: vbs } = toRefs(props)

const Path = computed(() => (Icons as Record<string, Component>)[pascalcase(icon.value)])
</script>

<template lang="pug">
svg(
  xmlns="http://www.w3.org/2000/svg"
  :class="['icon', props.name]"
  :viewBox="`0 0 ${vbs} ${vbs}`"
  :width="width ?? size"
  :height="height ?? size"
)
  g(:fill="color")
    path(v-is="Path")
</template>
