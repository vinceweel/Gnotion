<script lang="ts" setup>
import { toRefs } from 'vue'
import type { PropType } from 'vue'

import Space from './BaseSpace.vue'

const props = defineProps({
  list: Array as unknown as PropType<Label[]>
})
const { list } = toRefs(props)
</script>

<template lang="pug">
nav.LabelGroup.__center.-axis.__unselect
  template(v-for="({ name }, n) of list" :key="n")
    a.label {{ name }}
    Space(width="4")
</template>

<style scoped>
.LabelGroup {
  flex-wrap: wrap;
}

.label {
  border-radius: var(--radius--normal);
  background-color: hsl(var(--color-text--dazzle));
  color: hsl(var(--color-text--dark));
  font-size: var(--font-size--small);
  padding: var(--padding--tiny) var(--padding--small);
}
</style>
