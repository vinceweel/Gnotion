import { reactive } from 'vue'

import * as actions from './actions'

const theme = reactive({
  dark: false,
  light: true,
})

export const state = reactive({
  theme,
})

export const useDispatch = (action: Action) => {
  return {}
}

export const useCommit = () => {}

export type ActionName = keyof typeof actions
export type ActionParams = Record<string, any>
export type Action = {
  type: ActionName
  payload?: ActionParams
  meta?: Action['payload']
  error?: null | Error | string
}

const dispatch = async (action: ActionName, params: ActionParams = {}) => {
  return {
    action,
    data: { test: true, ...params },
  }
}

const hasAction = (action: ActionName) => Object.keys(actions).includes(action)

const useStore = (provider: Provider) => {
  return { hasAction, dispatch }
}

export default useStore

export type Provider = 'github' | 'other'
export type Engine = 'issue' | 'repo' | 'webdav' | 'wiki'
