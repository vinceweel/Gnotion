<script lang="ts" setup>

</script>

<template lang="pug">
.Discussion
  .wrap
    p(v-for="n of 15" :key="n")
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum reiciendis aperiam consectetur veniam dignissimos voluptate quibusdam atque ipsam quasi, ullam earum eligendi similique, neque soluta amet incidunt excepturi iure.
</template>

<style scoped>
.Discussion {
  position: relative;
}

.wrap {
  padding: 0 var(--padding--normal);
}
</style>
