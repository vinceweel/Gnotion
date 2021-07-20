<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

import useScrolling from '../hooks/scrolling'
import { baseSizePadding } from '../variables'

import { fabHeight, toggleFAB } from './FloatActionBar.vue'

const readerEl = ref(null)
const [{ offset, position, axis }, { mountListener, scrollY }] = useScrolling(readerEl, { throttle: { wait: 400 } })

onMounted(() => {
  mountListener()
})
</script>

<template lang="pug">
div(style="position: fixed; z-index: 10; top: 30vh; height: 2em; background-color: white;")
  | {{ offset }}
  | {{ position }}
  | {{ axis }}
article.Reader(ref="readerEl")
  .wrap
    p(v-for="n of 25" :key="n")
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum reiciendis aperiam consectetur veniam dignissimos voluptate quibusdam atque ipsam quasi, ullam earum eligendi similique, neque soluta amet incidunt excepturi iure.
    p(v-for="n of 15" :key="n")
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum reiciendis aperiam consectetur veniam dignissimos voluptate quibusdam atque ipsam quasi, ullam earum eligendi similique, neque soluta amet incidunt excepturi iure.
</template>

<style scoped>
.Reader {
  /* height: 100%;
  width: 100%; */
  width: calc(100% + 10px);

  padding: v-bind(baseSizePadding);
  padding-top: v-bind(fabHeight);

  overflow-x: auto;
  overflow-y: auto;

  top: -16px;
  bottom: -16px;
  position: absolute;
}

.wrap {
  width: 200vw;
}
</style>
