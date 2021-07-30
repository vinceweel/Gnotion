import { ref } from 'vue'

import { merge } from '../../functions'
import { useGithub } from '../api'
import { useConfig, useSettings } from '../global'

import * as base from './base'
import * as github from './github'

export const requestors = {
  ...base,
  ...github,
}

export const getContext = () => ({
  github: useGithub(),
  config: useConfig(),
  settings: useSettings(),
})

export type RequestorNames = keyof typeof requestors
export type RequestorScope = 'github'
export type RequestorParams = Parameters<typeof requestors[RequestorNames]>[1]

export type Options = {
  immediate?: boolean
  params?: RequestorParams
  mock?: boolean
}

export const useData = <Name extends RequestorNames, Data = any>(
  name: Name,
  options: Options = {},
) => {
  const defaultOptions: Options = {
    immediate: true,
    params: {},
  }
  const { immediate, params, mock } = merge(
    defaultOptions,
    options,
  ) as Required<Options>

  const data = ref<null | Data>(null)
  const error = ref<null | Error>(null)
  const loading = ref(false)

  const requestor = requestors[name]

  const refresh = async (_params: Options['params'] = params) => {
    loading.value = true
    const result = await requestor(getContext(), _params)
    loading.value = false

    if (result instanceof Error) return (error.value = result)

    data.value = result
  }

  if (mock) return <const>[data, { refresh }, { error, loading }]

  if (immediate && params !== null) refresh(params)

  return <const>[data, { refresh }, { error, loading }]
}

export default useData
