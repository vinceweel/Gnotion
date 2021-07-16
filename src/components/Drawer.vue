<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { drawerWidth, drawerHeight } from "../variables";

const name = 'Drawer'
</script>

<template lang="pug">
nav(:class="name")
  .wrap
    | {{ name }}
</template>

<style scoped>
.Drawer {
  width: v-bind(drawerWidth);
  height: v-bind(drawerHeight);

  position: fixed;
}
</style>
