<script lang="ts">
import { computed, defineComponent, onMounted, watch, ref, Ref } from 'vue'

const name = 'FloatActionMenu'

export default defineComponent({
  name,
  props: ['offset', 'on', 'width'],
  setup(props, { emit }) {
    const wrap: Ref<Element | null> = ref(null)

    const width = computed(() => `${props.width}px`)
    const x = computed(() => `${props.offset.x}px`)
    const y = computed(() => `${props.offset.y}px`)

    onMounted(() => {
      emit('update:width', wrap.value!.clientWidth)
    })

    return { name, wrap, width, x, y }
  },
})
</script>

<template>
  <div :class="['_zero_', name, on && 'on']">
    <div class="wrap" ref="wrap">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.FloatActionMenu {
  transition: var(--transition-fade-ease);
  opacity: 0;
  visibility: hidden;
  z-index: 8;
}

.FloatActionMenu.on {
  opacity: 1;
  visibility: visible;
}

.wrap {
  transform: translate3d(v-bind(x), v-bind(y), 0);
  box-shadow: var(--card-shadow-normal);
  border-radius: var(--card-radius-normal);
  background-color: var(--color-light-ffffff);
  /* width: v-bind(width); */
  min-height: 90px;
  min-width: 160px;
  padding: var(--card-padding-normal);
  display: inline-block;
}
</style>
