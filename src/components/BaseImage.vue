<script lang="ts">
export default { name: 'Image' }
</script>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import { notRef } from '../functions'
import { useUnitSize } from '../hooks/style'

const props = withDefaults(defineProps<{
  src?: string
  mode?: 'contain' | 'cover' | 'auto' | string
  size?: string | number
  height?: string | number
  width?: string | number
  position?: string
  alt?: string
  isImgTag?: boolean
}>(), ({
  position: 'center center',
  src: '',
  mode: 'contain',
  size: undefined,
  height: 'auto',
  width: 'auto',
  alt: 'image',
  isImgTag: false,
}))
const refs = toRefs(props)

const notSize = notRef(refs.size)
const [height] = useUnitSize(notSize(refs.height))
const [width] = useUnitSize(notSize(refs.width))

const url = computed(() => `url(${refs.src.value})`)
const mode = refs.mode
</script>

<template lang="pug">
.Image
  .wrap.__center.-axis.-cross
    img.img(v-show="isImgTag" :src="src" :alt="alt")
</template>

<style scoped>
.Image {
  height: v-bind(height);
  width: v-bind(width);
}

.img {
  object-fit: v-bind(mode);
  object-position: v-bind(position);

  height: inherit;
  width: inherit;
  font-size: var(--font-size--small);
}

.wrap {
  background-repeat: no-repeat;
  background-position: v-bind(position);
  background-size: v-bind(mode);
  background-image: v-bind(url);

  height: inherit;
  width: inherit;
}
</style>
