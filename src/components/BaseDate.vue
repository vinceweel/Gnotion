<script lang="ts" setup>
import { toRefs } from 'vue'
import type { PropType } from 'vue'
import type { MomentInput } from 'moment'

import { useMoment } from '../hooks/moment'

const props = defineProps({
  input: {
    type: [String, Number] as unknown as PropType<MomentInput>,
    default: () => Date.now()
  }
})
const refs = toRefs(props)

const [{ now }] = useMoment(refs.input)
</script>

<template lang="pug">
span {{ now }}
</template>

<style scoped>
</style>
