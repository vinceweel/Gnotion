<script lang="ts">

</script>

<script lang="ts" setup>
import { ref } from "vue";
import { drawerHeight, drawerWidth, drawerOffsetX, drawerOpacity, fabOffsetY } from "../variables";
</script>

<template lang="pug">
.component
  .wrap
    | {{ drawerOffsetX }}
</template>

<style scoped>
.component {
  height: calc(v-bind(drawerHeight) - v-bind(fabOffsetY) - 16px);
  width: v-bind(drawerWidth);

  left: calc(v-bind(drawerWidth) * -1);
  top: v-bind(fabOffsetY);
  position: absolute;
  z-index: 10;
}

.wrap {
  opacity: v-bind(drawerOpacity);
  transform: translateX(v-bind(drawerOffsetX));
  transition: opacity 0.25s var(--transition--normal),
    transform 0.25s var(--transition--normal);

  box-shadow: var(--shadow-colored--medium);
  border-radius: var(--radius--normal);
  background-color: hsl(var(--color-background--normal));

  height: 100%;
  width: 100%;
  padding: var(--padding--normal);

  overflow-y: hidden;
}
</style>
