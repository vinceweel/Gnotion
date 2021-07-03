<template>
  <div :class="name">
    <button><Icon color="#33333333" /></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Icon from './BaseIcon.vue'

const name = `UniversalAction`

export default defineComponent({
  name,
  components: { Icon },
  setup() {
    const color = ref('blue')
    return { name, color }
  },
})
</script>

<style scoped>
.UniversalAction {
  height: 0;
  width: 0;
  overflow: visible;
  position: relative;

  transform: translateX(var(--universal-action-x))
    translateY(var(--universal-action-y));
}
</style>
