<template>
    <slot v-bind="result" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import useStore, { ActionName, Provider } from '../hooks/store'

type Props = {
  provider?: Provider
  action: ActionName
  params?: { [k: string]: unknown }
}

export default defineComponent({
  props: ['provider', 'action', 'params'],

  async setup({ provider = 'github', action, params }: Props) {
    const { hasAction, dispatch } = useStore(provider)

    if (!hasAction(action))
      throw new Error(`the action named: "${action}" is not exsited.`)

    const result = dispatch(action, params)

    return {
      result,
    }
  },
})
</script>
