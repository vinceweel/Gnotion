import { ref } from 'vue'
import { merge } from '../../functions'
import * as base from './base'
import * as github from './github'

const requestors = {
  ...base,
  ...github,
}

export type RequestorNames = keyof typeof requestors
export type RequestorScope = 'github'

type Options = {
  immediate?: boolean
  params?: Parameters<typeof requestors[RequestorNames]>[1]
}

const defaultOptions: Options = {
  immediate: true,
  params: {},
}

export const useData = <Name extends RequestorNames>(
  name: Name,
  options: Options = {},
) => {
  const { immediate, params } = merge(
    defaultOptions,
    options,
  ) as Required<Options>

  const data = ref()
  const error = ref()
  const loading = ref(false)

  const context = {}

  const requestor = requestors[name]

  const refresh = async (_params: Options['params'] = params) => {
    loading.value = true
    const [_error, _data] = await requestor(context, _params)
    loading.value = false

    error.value = _error
    if (error.value !== null) return

    data.value = _data
  }

  if (immediate && params !== null) refresh(params)

  return <const>[data, { refresh }, { error, loading }]
}

export default useData
