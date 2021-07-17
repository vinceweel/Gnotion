<script lang="ts" setup>
import { toggleDrawer } from "../variables";

const name = 'FloatActionBar'
</script>

<template lang="pug">
nav(:class="[name]")
  .wrap(@click="() => toggleDrawer()")
    | {{ name }}
</template>

<style scoped>
.FloatActionBar {
  position: absolute;
  z-index: 7;
}

.wrap {
  background-color: var(--background-color--normal);
}
</style>
