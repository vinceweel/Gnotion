<script lang="ts" setup>
import { baseSizePadding } from "../variables";
import { fabOffsetY } from './FloatActionBar.vue'
</script>

<template lang="pug">
article.Reader
  .wrap
    p(v-for="n of 15" :key="n") Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum reiciendis aperiam consectetur veniam dignissimos voluptate quibusdam atque ipsam quasi, ullam earum eligendi similique, neque soluta amet incidunt excepturi iure.
</template>

<style scoped>
.Reader {
  /* height: 100%;
  width: 100%; */
  width: calc(100% + 10px);
  
  padding: v-bind(baseSizePadding);
  padding-top: v-bind(fabOffsetY);
  
  overflow-x: hidden;
  overflow-y: auto;
  
  top: -16px;
  bottom: -16px;
  position: absolute;
}

/* .wrap {
  margin-top: -10px;
  margin-bottom: -10px;
  height: inherit;
  width: inherit;
} */
</style>
