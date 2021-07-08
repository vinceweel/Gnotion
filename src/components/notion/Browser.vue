<template>
  <div :class="['_zero_', name, on && 'on']">
    <div class="wrap">Browser</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useToggle } from '../../hooks/notion'

const name = 'Browser'

export default defineComponent({
  name,
  setup() {
    const [on] = useToggle('browser')

    return { name, on }
  },
})
</script>

<style>
:root {
  --browser-height: 100vh;
  --browser-width: 100vw;

  --browser-offset-x: 0;
}
</style>

<style scoped>
.Browser {
  z-index: 5;
}

.Browser.on {
  --browser-offset-x: var(--browser-width);
}

.wrap {
  transform: translateX(var(--browser-offset-x));

  left: calc(var(--browser-width) * -1);
  top: 0;
  position: absolute;

  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;

  background-color: var(--color-light-ffffff);
  height: var(--browser-height);
  width: var(--browser-width);
  padding: var(--padding-normal);
  padding-top: var(--fab-offset-y);
}
</style>
