<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useUnitSize } from '../hooks/style'

import { editorBarTop, editorBarHeight } from './DiscussionEditorBar.vue'

const [height] = useUnitSize(6, 'em')

const { t } = useI18n()
</script>

<template lang="pug">
.DiscussionEditor
  .wrap
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
  height: var(--height);
  width: 100%;
}
</style>
