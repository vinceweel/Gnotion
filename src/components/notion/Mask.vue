<template>
  <div :class="['_zero_', name]" @click="clear"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useToggle } from '../../hooks/notion'

const name = 'Mask'

export default defineComponent({
  name,
  setup() {
    const [, toggleDrawer] = useToggle('drawer')
    const clear = () => {
      toggleDrawer(false)
    }

    return { name, clear }
  },
})
</script>

<style scoped>
.Mask {
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  z-index: 3;
}
</style>
