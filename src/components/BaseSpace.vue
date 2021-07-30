<script lang="ts">
export default { name: 'Space' }
</script>

<script lang="ts" setup>
import { toRefs } from 'vue'
import type { PropType } from 'vue'
import { useUnitSize } from '../hooks/style'

const props = defineProps({
  height: [String, Number],
  width: [String, Number],
  margin: {
    type: String as unknown as PropType<'0' | 'auto'>,
    default: '0'
  }
})
const refs = toRefs(props)

const [height] = useUnitSize(props.margin === 'auto' ? 0 : refs.height)
const [width] = useUnitSize(props.margin === 'auto' ? 0 : refs.width)
const margin = refs.margin
</script>

<template lang="pug">
.Space(:style="{ height, width }")
</template>

<style scoped>
.Space {
  margin: v-bind(margin);
  height: 100%;
  width: 100%;
}
</style>
