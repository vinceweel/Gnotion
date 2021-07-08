<template>
  <div :class="['_zero_', name, on && 'on']">
    <button @click="toggleDrawer">drawer</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useToggle } from '../../hooks/notion'

const name = 'FloatActionBar'

export default defineComponent({
  name,
  setup() {
    const [, toggleDrawer] = useToggle('drawer')
    const [on] = useToggle('fab')
    return { name, toggleDrawer, on }
  },
})
</script>

<style scoped>
.FloatActionBar {
  --fab-hegiht: 56px;
  --fab-width: calc(100vw - 32px);
  --fab-warp-padding: 16px;

  z-index: 9;
}
</style>
