import { reactive } from 'vue'
import useConsole from '../console'

const theme = reactive({
  dark: false,
  light: true,
})

export const state = reactive({
  theme,
})

import * as commonActions from './actions'
import * as githubActions from './github/actions'

const actions = { ...commonActions, ...githubActions }

const genDispatch = (name: Provider) => (
  action: ActionName,
  params: ActionParams = {},
) => {
  const actionsProviders: Record<Provider, Record<string, any>> = {
    github: githubActions,
  }

  const actions = actionsProviders[name]
  const actionReducer = actions[action]

  if (actionReducer) return actionReducer(params)

  return {
    action,
    data: { test: true, ...params },
  }
}

const hasAction = (action: ActionName) => Object.keys(actions).includes(action)

const useStore = (name: Provider = 'github') => {
  const { log } = useConsole('useStore')
  log('test')

  return { hasAction, dispatch: genDispatch(name) }
}

export default useStore

export type Provider = 'github' | string
export type Engine = 'issue' | 'repo' | 'webdav' | 'wiki'

export type ActionName = keyof typeof actions
export type ActionParams = Record<string, any>
export type Action = {
  type: ActionName
  payload?: ActionParams
  meta?: Action['payload']
  error?: null | Error | string
}
