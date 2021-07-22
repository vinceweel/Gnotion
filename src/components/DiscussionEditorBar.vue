<script lang="ts">
import { useI18n } from 'vue-i18n'

import { baseSize } from '../variables'
import { useUnitSize } from '../hooks/style'

import { fabOffsetY, fabHeight } from './FloatActionBar.vue'
import { isInter } from './DiscussionEditor.vue'

export const [editorBarHeight, { calc }] = useUnitSize(48)
export const editorBarTop = calc(() => `${fabOffsetY.value} + ${baseSize.value}`)
</script>

<script lang="ts" setup>
import Button from './BaseButton.vue'
import Icon from './BaseIcon.vue'
import Avatar from './BaseAvatar.vue'
import Space from './BaseSpace.vue'

const isInterY = isInter('y')
const height = editorBarHeight
const top = editorBarTop

const { t } = useI18n()
</script>

<template lang="pug">
.DiscussionEditorBar(:class="{ '-drop': isInterY }")
  .wrap.__center.-axis
    Avatar(size="42")
    span.name Guest
    Space
    Button.action
      span.label {{ t('login_github_tip') }}
      Icon(name="github")
</template>

<style scoped>
.DiscussionEditorBar {
  --offsetY: 0px;
  --height: v-bind(height);
  --width: 100%;
  --shadow: var(--shadow-colored--medium);
  --blur: 5px;

  transition: top 0.175s var(--transition--normal),
    bottom 0.175s var(--transition--normal);

  height: var(--height);
  width: var(--width);

  padding: 0 var(--padding--normal);

  top: v-bind(top);
  bottom: var(--base-size);
  position: sticky;
  z-index: 4;
}
.-drop {
  --shadow: var(--shadow-colored--border);
}

.wrap {
  backdrop-filter: blur(var(--blur));
  box-shadow: var(--shadow);
  border-radius: var(--height);
  background-color: hsla(var(--color-background--normal), 30%);

  height: inherit;
  width: 100%;

  padding: 0 calc(var(--base-size) / 2);
}

.action {
  flex-shrink: 0;
  margin-right: calc(var(--base-size) / 2);
}

.name,
.label {
  color: hsl(var(--color-text--light));
  font-size: var(--font-size--small);
  padding: 0 var(--base-size);
}

.name {
  color: hsl(var(--color-text--normal));
  font-size: var(--font-size--medium);
  font-weight: bold;
}
</style>
