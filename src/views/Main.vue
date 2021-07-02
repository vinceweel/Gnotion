<template>
    <View>
        <FloatAction />
        <Reader />
    </View>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as components from './main'

export default defineComponent({
    name: 'Main',
    components,
})
</script>

<style src="./main.css" scoped></style>