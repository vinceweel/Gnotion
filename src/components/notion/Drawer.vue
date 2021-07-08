<template>
  <div :class="['_zero_', name, on && 'on']">
    <div class="wrap">Drawer {{ on }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useToggle } from '../../hooks/notion'

const name = 'Drawer'

export default defineComponent({
  name,
  setup() {
    const [on] = useToggle('drawer')
    return { name, on }
  },
})
</script>

<style scoped>
.Drawer {
  --drawer-hegiht: 100vh;
  --drawer-width: 240px;
  --drawer-warp-padding: 16px;
}

.Drawer.on > .wrap {
  transform: translateX(var(--drawer-width));
}

.wrap {
  transform: 0;

  left: calc(var(--drawer-width) * -1 + var(--drawer-warp-padding));
  top: var(--drawer-warp-padding);
  position: relative;

  transition: transform 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);

  /* backdrop-filter: blur(2px); */
  box-shadow: var(--card-shadow-normal);
  border-radius: var(--card-radius-normal);
  background-color: var(--color-light-ffffff);

  height: calc(var(--drawer-hegiht) - var(--drawer-warp-padding) * 2);
  width: calc(var(--drawer-width) - var(--drawer-warp-padding) * 2);
  padding: var(--card-padding-normal);
  overflow: hidden;
}
</style>
