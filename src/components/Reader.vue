<script lang="ts" setup>
const name = 'Reader'
</script>

<template lang="pug">
section(:class="name")
  .wrap {{ name }}
</template>

<style scoped>
.Reader {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.wrap {
  height: 200vh;
}
</style>
