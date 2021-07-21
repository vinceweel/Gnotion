<script lang="ts">
export default {
  name: 'Gap'
}
</script>

<script lang="ts" setup>
import { toRefs } from 'vue'
import { useUnitSize } from '../hooks/style'

const props = defineProps({
  height: [String, Number],
  width: [String, Number],
})
const refs = toRefs(props)

const [height] = useUnitSize(refs.height)
const [width] = useUnitSize(refs.width)
</script>

<template lang="pug">
.Gap(:style="{ height, width }")
</template>

<style scoped>
.Gap {
  height: 100%;
  width: 100%;
}
</style>
