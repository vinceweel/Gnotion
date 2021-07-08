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

<style>
:root {
  --drawer-hegiht: calc(100vh - var(--padding-normal) - var(--fab-offset-y));
  --drawer-width: 240px;

  --drawer-offset-x: 0;
  --drawer-offset-y: calc(var(--padding-normal) * 0 + var(--fab-offset-y));
  --drawer-show: 0;
}
</style>

<style scoped>
.Drawer {
  z-index: 16;
}

.Drawer.on {
  --drawer-offset-x: calc(var(--drawer-width) + var(--padding-normal));
  --drawer-show: 1;
}

.wrap {
  transform: translateX(var(--drawer-offset-x));
  opacity: var(--drawer-show);

  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;

  left: calc(var(--drawer-width) * -1);
  top: var(--drawer-offset-y);
  position: relative;

  /* backdrop-filter: blur(2px); */
  box-shadow: var(--card-shadow-normal);
  border-radius: var(--card-radius-normal);
  background-color: var(--color-light-ffffff);

  height: var(--drawer-hegiht);
  width: var(--drawer-width);
  padding: var(--card-padding-normal);
  overflow: hidden;
}
</style>
