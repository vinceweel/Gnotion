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
    console.log(on)
    return { name, on }
  },
})
</script>

<style scoped>
.Drawer {
  --drawer-hegiht: 100vh;
  --drawer-width: 240px;
  --drawer-warp-padding: 16px;

  z-index: 6;
}

.Drawer.on > .wrap {
  transform: translateX(var(--drawer-width));
  opacity: 1;
}

.wrap {
  transform: 0;
  opacity: 0;

  transition: opacity .25s ease-in-out, transform 0.25s ease-in-out;

  left: calc(var(--drawer-width) * -1 + var(--drawer-warp-padding));
  top: var(--drawer-warp-padding);
  position: relative;

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
