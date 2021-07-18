<script lang="ts" setup>
import { ref, toRefs, watch } from 'vue'
import type { Ref } from 'vue'
import { useUnitSize } from '../hooks/style'
import { leftRef } from '../functions'

const props = defineProps({
  size: {
    type: [String, Number],
    default: 48,
  },
  height: {
    type: [String, Number],
  },
  width: {
    type: [String, Number],
  },
})
const refs = toRefs(props)

const [size] = useUnitSize(props.size)
const [height] = useUnitSize(leftRef(refs.height, refs.size))
const [width] = useUnitSize(leftRef(refs.width, refs.size))
</script>

<template lang="pug">
button(class="button __unset")
  slot
</template>

<style scoped>
.button {
  background-color: red;
  height: v-bind(height);
  width: v-bind(width);
}
</style>
