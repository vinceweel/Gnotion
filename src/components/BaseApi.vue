<template>
    <slot v-bind="result" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import useStore, { Provider } from '../hooks/store'

type Props = {
    provider?: Provider
    action: string
    params?: { [k: string]: unknown }
}

export default defineComponent({
    props: ['provider', 'action', 'params'],

    setup({ provider = 'github', action, params }: Props) {
        const { dispatch } = useStore(provider)

        const result = dispatch(action, params)

        return { result }
    },
})
</script>