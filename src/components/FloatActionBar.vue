<script lang="ts" setup>
const name = 'FloatActionBar'
</script>

<template lang="pug">
nav(:class="[name]")
  .wrap
    | {{ name }}
</template>

<style scoped>
.FloatActionBar {
  position: absolute;
}
</style>
