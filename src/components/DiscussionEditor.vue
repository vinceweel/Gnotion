<script lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useUnitSize } from '../hooks/style'
import { useIntersection } from '../hooks/scrolling'

import { scrolling, scrollY } from './Reader.vue'
import { editorBarTop, editorBarHeight } from './DiscussionEditorBar.vue'

export const [, { observe, isInter }] = useIntersection(scrolling)
</script>

<script lang="ts" setup>
import Icon from './BaseIcon.vue'
import Button from './BaseButton.vue'

const [height] = useUnitSize(4, 'em')
const [actionSize] = useUnitSize(48, 'px')

const target = ref(null)
onMounted(() => observe(target))

const { t } = useI18n()

// TODO: remove after test
onMounted(() => scrollY(3500, false))
</script>

<template lang="pug">
.DiscussionEditor(ref="target")
  .wrap
    Button.action.-send(v-if="false" :size="actionSize")
      Icon.icon(name="done" size="28")
    textarea.textarea.__unset(:placeholder="t('discussion_editor_tip')")
</template>

<style scoped>
.DiscussionEditor {
  --height: v-bind(height);
  --width: 100%;

  transition: top 0.175s var(--transition--normal);

  height: var(--height);
  width: var(--width);

  padding: 0 var(--padding--normal);

  margin-top: calc(v-bind(editorBarHeight) * -1);

  top: calc(v-bind(editorBarTop));
  position: sticky;
  z-index: 3;
}

.wrap {
  box-shadow: var(--shadow-colored--medium);
  border-radius: calc(v-bind(editorBarHeight) / 2);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: hsl(var(--color-background--normal));

  width: 100%;

  padding: var(--padding--small) var(--padding--normal);

  position: relative;
}

.wrap::before,
.wrap::after {
  display: block;
  content: "";
}

.wrap::before {
  padding-top: v-bind(editorBarHeight);
}

.wrap::after {
  --h: 24px;

  background-image: linear-gradient(
    to bottom,
    hsl(var(--color-background--normal)) 50%,
    transparent
  );

  height: var(--h);
  width: 100%;

  bottom: calc(var(--h) * -1);
  left: 0;
  position: absolute;
}

.textarea {
  resize: vertical;
  
  height: var(--height);
  width: 100%;
}

.action.-send {
  --background-color: hsl(var(--color-text--normal));

  bottom: calc(-1 * v-bind(actionSize) + var(--padding--small));
  right: calc(v-bind(actionSize) - var(--padding--small));
  position: absolute;
  z-index: 2;
}

.action.-send .icon {
  color: hsl(var(--color-text--dazzle));
}
</style>
