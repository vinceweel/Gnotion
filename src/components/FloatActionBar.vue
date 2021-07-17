<script lang="ts" setup>
import ButtonIcon from './BaseButtonIcon.vue'
import Icon from './BaseIcon.vue'

import { toggleDrawer } from "../variables";

const name = 'FloatActionBar'
</script>

<template lang="pug">
nav(:class="[name]")
  .wrap
    //- ButtonIcon
    Icon(name="account" color="blue")
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
