<template>
    <ActivityNotion />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { ActivityNotion } from './activities'

export default defineComponent({
    name: 'Gnotion',
    components: {
        ActivityNotion,
    },
})
</script>

<style src="./app.css"></style>
