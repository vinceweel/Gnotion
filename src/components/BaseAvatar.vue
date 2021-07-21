<script lang="ts">
export default { name: 'Avatar' }
</script>

<script lang="ts" setup>
import { toRefs } from 'vue'
import { useI18n } from 'vue-i18n'

import { useUnitSize } from '../hooks/style'

import Icon from './BaseIcon.vue'
import Image from './BaseImage.vue'

const props = withDefaults(defineProps<{
  url?: string
  size?: string | number
}>(), ({
  url: '',
  size: 48
}))
const refs = toRefs(props)

const [size] = useUnitSize(refs.size)

const { t } = useI18n()
</script>

<template lang="pug">
.Avatar
  .wrap.__center.-axis.-cross
    Icon(v-if="!url" name="account" :size="size")
    Image(v-else :src="url" :size="size" mode="cover" :alt="t('avatar')")
</template>

<style scoped>
.Avatar {
  border-radius: v-bind(size);
  background-color: hsl(var(--color-background--normal));

  height: v-bind(size);
  width: v-bind(size);

  overflow: hidden;
}

.wrap {
  height: inherit;
  width: inherit;
}
</style>
