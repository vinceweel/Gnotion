<script lang="ts">
import { toRefs } from 'vue'
import { notRef } from '../functions'
import { useUnitSize } from '../hooks/style'

export default { name: 'Button' }
</script>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  size?: string | number
  height?: string | number
  width?: string | number
}>(), {
  height: 'auto',
  width: 'auto'
})
const refs = toRefs(props)

const notSize = notRef(refs.size)

const [height] = useUnitSize(notSize(refs.height))
const [width] = useUnitSize(notSize(refs.width))
</script>

<template lang="pug">
button.__unset.Button
  .wrap.__center.-axis.-cross
    slot
</template>

<style scoped>
.Button {
  --shadow: var(--shadow-colored--low);
  --radius: 24px;
  --border: unset;
  --background-color: hsl(var(--color-background--normal));

  --height: v-bind(height);
  --width: v-bind(width);

  --padding: calc(var(--base-size) / 2) var(--base-size);
}

.wrap {
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  border: var(--border);

  background-color: var(--background-color);

  height: var(--height);
  width: var(--width);

  padding: var(--padding);
}
</style>
