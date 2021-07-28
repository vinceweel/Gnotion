<script lang="ts" setup>
import type { PropType } from 'vue'

import useData from '../hooks/data'
import type { RequestorNames } from '../hooks/data'

const props = defineProps({
  name: {
    type: String as unknown as PropType<RequestorNames>,
    required: true
  },
  params: {
    type: Object
  },
  immediate: Boolean
})
const { name, params } = props

const [data, { refresh }, { loading, error }] = useData(name, { params })
</script>

<template lang="pug">
slot(v-bind="[data, { refresh }, { loading, error }]")
</template>

<style scoped>
</style>
