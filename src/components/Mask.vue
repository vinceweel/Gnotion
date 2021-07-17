<script lang="ts" setup>
import { computed } from "vue";
import { maskVisibility, toggleMask } from "../variables";

const name = 'Mask'

const visibility = computed(() => ['hidden', 'visible'][maskVisibility.value])
</script>

<template lang="pug">
div(:class="[name]" @click="() => toggleMask(true)")
</template>

<style scoped>
.Mask {
  opacity: v-bind(maskVisibility);
  visibility: v-bind(visibility);

  backdrop-filter: var(--blur--normal);
  background-color: hsla(var(--background-color--normal), 50%);

  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 8;
}
</style>
