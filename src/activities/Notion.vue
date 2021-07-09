<template>
  <FloatActionBar />
  <Drawer />
  <Browser />
  <template v-if="editorOn">
    <Editor />
  </template>
  <template v-else>
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
    const [editorOn] = useToggle('editor')

    return { editorOn }
  },
})
</script>
