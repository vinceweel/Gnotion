<script lang="ts" setup>
import type { PropType } from 'vue'

import useData from '../hooks/data'
import type { RequestorNames, RequestorParams } from '../hooks/data'

const props = defineProps({
  mock: {
    type: [Boolean, Object],
    default: false
  },
  name: {
    type: String as unknown as PropType<RequestorNames>,
    required: true
  },
  params: {
    type: Object as unknown as PropType<RequestorParams>,
    default: () => ({})
  },
  immediate: Boolean
})
const { name, params, mock } = props

const [data, { refresh }, { loading, error }] = useData<typeof name, any>(name, { params, mock })
</script>

<template lang="pug">
slot(v-bind="[data, { refresh }, { loading, error }]")
</template>

<style scoped>
</style>
