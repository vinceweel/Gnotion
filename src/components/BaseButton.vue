<script lang="ts" setup>
const name = 'Button'
</script>

<template lang="pug">
button(:class="[name]")
  slot
</template>

<style scoped>
</style>
