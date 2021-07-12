<template>
  <div v-show="on" :class="['_zero_', name]" @click="clear">
    <div class="wrap _blur_"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useToggle } from '../../hooks/notion'

const name = 'Mask'

export default defineComponent({
  name,
  setup() {
    const [on, toggleMask] = useToggle('mask')
    const [statusDrawer, toggleDrawer] = useToggle('drawer')

    // const on = computed(() => statusDrawer.value)

    const clear = () => {
      toggleDrawer(false)
      toggleMask(false)
    }

    return { name, on, clear }
  },
})
</script>

<style scoped>
.Mask {
  z-index: 7;
}

.wrap {
  background-color: var(--color-light-ffffff);
  height: 100vh;
  width: 100vw;
}
</style>
