<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

import useScrolling from '../hooks/scrolling'

import { fabHeight, toggleFAB } from './FloatActionBar.vue'

const readerEl = ref(null)

const [{ direction }, { mountListener }] = useScrolling(readerEl, { throttle: { wait: 400 } })
onMounted(mountListener)
watch(direction, ({ y }) => toggleFAB(y === 'down'))
</script>

<template lang="pug">
article.Reader(ref="readerEl")
  .wrap
    p(v-for="n of 25" :key="n")
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum reiciendis aperiam consectetur veniam dignissimos voluptate quibusdam atque ipsam quasi, ullam earum eligendi similique, neque soluta amet incidunt excepturi iure.
    p(v-for="n of 15" :key="n")
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum reiciendis aperiam consectetur veniam dignissimos voluptate quibusdam atque ipsam quasi, ullam earum eligendi similique, neque soluta amet incidunt excepturi iure.
</template>

<style scoped>
.Reader {
  width: calc(100% + 10px);

  padding: var(--base-size-padding);
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
