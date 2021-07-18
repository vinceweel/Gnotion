<script lang="ts" setup>
import Button from './BaseButton.vue'
import Icon from './BaseIcon.vue'

import { toggleDrawer } from "../variables";

const name = 'FloatActionBar'
</script>

<template lang="pug">
nav(:class="[name]")
  .wrap
    Button(size="32" @click="() => toggleDrawer()")
      Icon(name="account")
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
