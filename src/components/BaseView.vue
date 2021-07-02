<template>
    <view>
        <slot />
    </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'View',
})
</script>

<style scoped>
view {
    display: flex;
    flex-direction: column;
}
</style>