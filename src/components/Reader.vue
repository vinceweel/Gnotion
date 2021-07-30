<script lang="ts">
import { onMounted, onUnmounted, watchEffect } from 'vue'
import useData from '../hooks/data'
import useScrolling, { useDirection } from '../hooks/scrolling'

export const [
  { targetRef, ...scrolling },
  { mountListener, addListener, scrollY },
] = useScrolling({ throttle: { wait: 400 } })

export const [, { isDown }] = useDirection(scrolling)

const [article, { refresh }] = useData('article', { immediate: true, params: { number: 1 } })
export const fetchArticle = (number: number) => {
  console.log(number);
  refresh({ number })
}
</script>

<script lang="ts" setup>
import Space from './BaseSpace.vue'
import Date from './BaseDate.vue'
import LabelGroup from './LabelGroup.vue'
import { fabHeight, toggleFAB } from './FloatActionBar.vue'

const target = targetRef

onMounted(mountListener)
onUnmounted(watchEffect(() => toggleFAB(isDown())))

const data = article
const list = [{ name: 'article' }, { name: 'news' }, { name: 'novel' }]
</script>

<template lang="pug">
article.Reader(ref="target")
  .wrap
    Space(:height="fabHeight")
    h1.title {{ data?.title }}
    section.meta
      Date.date(:input="data?.updated_at")
      Space(height="8")
      LabelGroup(:list="list")
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

.meta {
  background-color: hsl(var(--color-text--dawn));
  padding: var(--padding--normal);
}
</style>
