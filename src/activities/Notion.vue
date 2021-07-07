<template>
  <FloatActionBar />
  <Drawer />
  <Browser />
  <Reader />
  <Editor />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as components from '../components'

export default defineComponent({
  name: 'ActivityNotion',
  components,
})
</script>
