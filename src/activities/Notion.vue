<template>
  <FloatActionBar />
  <Drawer />
  <Browser />
  <Reader />
  <Editor />
  <Mask />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import components from '../components'

export default defineComponent({
  name: 'ActivityNotion',
  components,
})
</script>
