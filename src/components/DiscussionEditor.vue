<script lang="ts" setup>
import Avatar from './BaseAvatar.vue'

</script>

<template lang="pug">
.DiscussionEditor
  .wrap
    Avatar(size="42" url="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/VF-are-finally-here_feature.png")
    | ddd
</template>

<style scoped>
.DiscussionEditor {
  bottom: 0;
  position: sticky;
  z-index: 30;
}
</style>
