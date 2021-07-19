<script lang="ts">
export default {
  name: 'Button'
}
</script>

<template lang="pug">
button.__unset.component
  .wrap.__center-h_v
    slot
</template>

<style scoped>
.component {
  --radius: 24px;
  --border: 1px solid hsl(var(--color-border--normal));
  --background-color: hsl(var(--color-background--normal));

  --height: auto;
  --width: auto;

  --padding: calc(var(--base-size) / 2) var(--base-size);
}

.wrap {
  border-radius: var(--radius);
  border: var(--border);

  background-color: var(--background-color);

  height: var(--height);
  width: var(--width);
  padding: var(--padding);
}
</style>
