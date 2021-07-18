<script lang="ts" setup>
</script>

<template lang="pug">
button.__unset.component
  .wrap.__center-h_v
    slot
</template>

<style scoped>
.component {
  --height: 32px;
  --width: 48px;
  --radius: 24px;
  --padding: 0;
  --border: 1px solid hsl(var(--color-border--normal));
  --background-color: hsl(var(--color-background--normal));

  padding: var(--padding);
  position: relative;
}

.wrap {
  border-radius: var(--radius);
  border: var(--border);

  background-color: var(--background-color);

  height: var(--height);
  width: var(--width);
}
</style>
