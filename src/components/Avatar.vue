<template>
  <div :class="[name]" :style="style">
    <template v-if="isValid">
      <img
        class="image"
        :height="size"
        :width="size"
        :src="src"
        :alt="t('avatar')"
      />
    </template>
    <template v-else>
      <i v-is="Icon" class="icon" name="account" :size="size" />
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from './'

const name = 'Avatar'

export default defineComponent({
  name,
  props: ['url', 'size', 'height', 'width'],
  setup({ url, size = 42, width, height }) {
    const { t } = useI18n()

    const src = computed(() => url)
    const isValid = !!src.value

    const px = (num: number) => `${num}px`
    const style = computed(() => ({
      height: px(height ?? size),
      width: px(width ?? size),
    }))

    return { name, t, Icon, src, isValid, style, size }
  },
})
</script>

<style scoped>
.Avatar {
  position: relative;
}

.image {
  height: 100%;
  width: 100%;
}
</style>
