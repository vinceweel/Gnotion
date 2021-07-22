<script lang="ts" setup>
import { onMounted, onUnmounted, watch } from 'vue'

import useScrolling, { useDirection } from '../hooks/scrolling'

import Space from './BaseSpace.vue'
import { fabHeight, toggleFAB } from './FloatActionBar.vue'

const [
  { targetRef, ...scrolling },
  { mountListener },
] = useScrolling({ throttle: { wait: 800 } })

const [direction, { isDown }] = useDirection(scrolling)

onMounted(mountListener)
onUnmounted(watch(direction, () => toggleFAB(isDown())))
</script>

<template lang="pug">
article.Reader(ref="targetRef")
  .wrap
    Space(:height="fabHeight")
    p(v-for="n of 25" :key="n")
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum reiciendis aperiam consectetur veniam dignissimos voluptate quibusdam atque ipsam quasi, ullam earum eligendi similique, neque soluta amet incidunt excepturi iure.
  slot(name="bottom")
</template>

<style scoped>
.Reader {
  height: 100%;
  width: 100%;
  /* width: calc(100% + 10px); */

  overflow-x: hidden;
  overflow-y: auto;

  /* top: -16px;
  bottom: -16px; */
  position: absolute;
  z-index: 2;
}

.wrap {
  padding: 0 var(--base-size-padding);
}
</style>
