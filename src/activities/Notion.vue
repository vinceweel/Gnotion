<template>
  <FloatActionBar />
  <Drawer />
  <template v-if="browserOn">
    <Browser />
  </template>
  <template v-if="editorOn">
    <Editor />
  </template>
  <template v-if="!browserOn && !editorOn">
    <Reader />
    <DiscussEditor />
    <Discuss />
  </template>
  <Mask />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import components from '../components'
import { useToggle } from '../hooks/notion'

export default defineComponent({
  name: 'ActivityNotion',
  components,
  setup() {
    const [browserOn] = useToggle('browser')
    const [editorOn] = useToggle('editor')

    return { browserOn, editorOn }
  },
})
</script>
