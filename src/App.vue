<script lang="ts">
export default {
  name: 'GNotion'
}
</script>

<script lang="ts" setup>
import FloatActionBar from './components/FloatActionBar.vue'
import Drawer from './components/Drawer.vue'
import Browser, { showBrowser } from './components/Browser.vue'
import Reader from './components/Reader.vue'
import Editor from './components/Editor.vue'
import Discussion from './components/Discussion.vue'
import DiscussionEditor from './components/DiscussionEditor.vue'
import DiscussionEditorBar from './components/DiscussionEditorBar.vue'
import Mask from './components/Mask.vue'
</script>

<template lang="pug">
FloatActionBar
Drawer
Browser(v-if="showBrowser")
Editor(v-if="!true")
Reader(v-if="true")
  template(v-slot:bottom)
    DiscussionEditorBar
    DiscussionEditor
    Discussion
Mask
</template>

<style src="./app.css">
/* reference css file */
</style>
