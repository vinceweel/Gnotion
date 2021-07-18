<script lang="ts" setup>
import { computed } from "vue";
import { maskVisibility, toggleMask } from "../variables";

const visibility = computed(() => ['hidden', 'visible'][maskVisibility.value])
</script>

<template lang="pug">
.component
  .wrap(@click="() => toggleMask(true)")
</template>

<style scoped>
.component {
  opacity: v-bind(maskVisibility);
  visibility: v-bind(visibility);

  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 8;
}

.wrap {
  backdrop-filter: var(--blur--normal);
  background-color: hsla(var(--color-background--normal), 50%);

  height: 100%;
  width: 100%;
}
</style>
