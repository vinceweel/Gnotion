<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

import useScrolling from '../hooks/scrolling'

import Gap from './BaseGap.vue'
import { fabHeight, toggleFAB } from './FloatActionBar.vue'

const [
  { targetRef, direction },
  { mountListener },
] = useScrolling({ throttle: { wait: 800 } })

onMounted(mountListener)
onUnmounted(watch(direction, ({ y: direction }) => toggleFAB(direction === 'down')))
</script>

<template lang="pug">
article.Reader(ref="targetRef")
  .wrap
    Gap(:height="fabHeight")
    p(v-for="n of 25" :key="n")
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum reiciendis aperiam consectetur veniam dignissimos voluptate quibusdam atque ipsam quasi, ullam earum eligendi similique, neque soluta amet incidunt excepturi iure.
    slot(name="bottom")
</template>

<style scoped>
.Reader {
  width: calc(100% + 10px);
  width: 100%;

  padding: var(--base-size-padding);
  /* padding-top: v-bind(fabHeight); */

  overflow-x: hidden;
  overflow-y: auto;

  top: -16px;
  bottom: -16px;
  position: absolute;
}

.wrap {
  width: 100%;
}
</style>
