<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

import useScrolling from '../hooks/scrolling'

import { fabHeight, toggleFAB } from './FloatActionBar.vue'

const readerEl = ref(null)

const [{ direction }, { mountListener, scrollY }] = useScrolling(readerEl, { throttle: { wait: 800 } })

onMounted(mountListener)
watch(direction, ({ y }) => toggleFAB(y === 'down'))
</script>

<template lang="pug">
article.Reader(ref="readerEl")
  .wrap(@click="() => scrollY(1000, true)")
    p(v-for="n of 25" :key="n")
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum reiciendis aperiam consectetur veniam dignissimos voluptate quibusdam atque ipsam quasi, ullam earum eligendi similique, neque soluta amet incidunt excepturi iure.
    slot(name="bottom")
</template>

<style scoped>
.Reader {
  width: calc(100% + 10px);
  width: 100%;

  padding: var(--base-size-padding);
  padding-top: v-bind(fabHeight);

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
