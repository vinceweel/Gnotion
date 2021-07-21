<script lang="ts" setup>
import { fabOffsetY, fabHeight } from './FloatActionBar.vue'

import Button from './BaseButton.vue'
import Icon from './BaseIcon.vue'
import Avatar from './BaseAvatar.vue'
import Space from './BaseSpace.vue'
</script>

<template lang="pug">
.DiscussionEditorBar
  .wrap.__center.-axis
    Avatar(size="42")
    span.name Guest
    Space
    Button.action
      span.label Click to Login with Github >>
      Icon(name="github")
</template>

<style scoped>
.DiscussionEditorBar {
  --offsetY: 0px;
  --height: 48px;
  --width: 100%;
  --blur: 5px;

  transition: top 0.175s var(--transition--normal),
    bottom 0.175s var(--transition--normal);

  height: var(--height);
  width: var(--width);

  padding: 0 var(--padding--normal);

  top: calc(v-bind(fabOffsetY) + var(--base-size));
  bottom: var(--base-size);
  position: sticky;
  z-index: 30;
}

.wrap {
  backdrop-filter: blur(var(--blur));
  box-shadow: var(--shadow-colored--medium);
  border-radius: var(--height);
  background-color: hsla(var(--color-background--normal), 30%);

  height: inherit;
  width: 100%;

  padding: 0 calc(var(--base-size) / 2);
}

.action {
  flex-shrink: 0;
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
