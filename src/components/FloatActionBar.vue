<script lang="ts" setup>
const name = 'FloatActionBar'
import { toggleDrawer } from "../variables";
</script>

<template lang="pug">
nav(:class="[name]")
  .wrap(@click="() => toggleDrawer()")
    | {{ name }}
</template>

<style scoped>
.FloatActionBar {
  position: absolute;
}
</style>
