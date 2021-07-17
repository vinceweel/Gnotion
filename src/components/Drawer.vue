<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { drawerWidth, drawerHeight, chanegFab, fabOffsetY, toggleFab } from "../variables";
chanegFab(200)
const name = 'Drawer'
</script>

<template lang="pug">
nav(:class="name")
  .wrap(@click="() =>toggleFab()")
    | {{ name }}
</template>

<style scoped>
.Drawer {
  height: calc(v-bind(drawerHeight) - v-bind(fabOffsetY));
  width: v-bind(drawerWidth);

  background-color: red;
  /* left: calc(v-bind(drawerWidth) * -1); */
  /* bottom: 0; */
  top: 0;
  position: absolute;
}

.wrap {
  height: 100%;
  width: 100%;
}
</style>
