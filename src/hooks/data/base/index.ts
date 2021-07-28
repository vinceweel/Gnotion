import { getStorage } from '../../../functions'
import { defineAsyncData, defineData } from '../define'

export const __ = defineData((context, params) => [null])

export const accessToken = defineAsyncData(async () => {
  try {
    return [null, getStorage<string>('_gnotion_access_token')]
  } catch (_error) {
    return [new Error(_error)]
  }
})

export const settings = defineAsyncData(async ({}) => {
  return [null, getStorage('_gnotion_settings')]
})
