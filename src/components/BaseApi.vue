<template>
  <slot v-bind="{ result, loading, refresh }" />
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue'

import useStore, { ActionName, Provider } from '../hooks/store'
import { useProcess } from '../hooks/store/github/utils'

type Props = {
  provider?: Provider
  action: ActionName
  params?: { [k: string]: unknown }
}

export default defineComponent({
  props: ['provider', 'action', 'params'],

  setup({ provider = 'github', action, params }: Props, { emit }) {
    const { hasAction, dispatch } = useStore(provider)

    if (!hasAction(action))
      throw new Error(`the action named: "${action}" is not exsited.`)

    const result = ref({})
    const loading = ref(false)

    const refresh = async (_params: Record<string, any> | null = null) => {
      loading.value = true
      result.value = await dispatch(action)({ ...params, ..._params })
      await useProcess().sleep(5000)
      loading.value = false
    }

    onBeforeMount(async () => {
      await refresh()
      emit('finish', result.value)
    })

    return {
      result,
      loading,
      refresh,
    }
  },
})
</script>
