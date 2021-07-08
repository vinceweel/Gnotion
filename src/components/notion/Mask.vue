<template>
  <div v-show="on" :class="['_zero_', name]" @click="clear"></div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useToggle } from '../../hooks/notion'

const name = 'Mask'

export default defineComponent({
  name,
  setup() {
    const [statusDrawer, toggleDrawer] = useToggle('drawer')

    const on = computed(() => statusDrawer.value)

    const clear = () => {
      toggleDrawer(false)
    }

    return { name, on, clear }
  },
})
</script>

<style scoped>
.Mask {
  background-color: var(--color-light-ffffff);
  height: 100vh;
  width: 100vw;
  z-index: 8;
}
</style>
