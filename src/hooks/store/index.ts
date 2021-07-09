import { reactive, ref } from 'vue'
import useConsole from '../console'

export const THEME = Symbol('theme')
const _theme = {
  dark: false,
  light: true,
}
const theme = reactive(_theme)

export const NOTION = Symbol('notion')
const _notion = {
  fab: true,
  drawer: false,
  browser: false,
  mask: false,
  editor: false,
}
export type NotionComponentNames = keyof typeof _notion
const notion: Record<NotionComponentNames, boolean> = reactive(_notion)

export const state = reactive({
  _mode_: NOTION as typeof NOTION,

  [THEME]: theme,
  [NOTION]: notion,
})

import * as commonActions from './actions'
import * as githubActions from './github/actions'

export const actions = { ...commonActions, ...githubActions }

const genDispatch = (name: Provider) => (action: ActionName) => {
  const actionsProviders: Record<Provider, Record<string, any>> = {
    github: githubActions,
  }

  return (...params: any[]) => {
    const actions = actionsProviders[name]
    const actionReducer = actions[action]

    if (actionReducer) return actionReducer(...params)

    return {
      action,
      data: { test: true, ...params },
    }
  }
}

const hasAction = (action: ActionName) => Object.keys(actions).includes(action)

import * as commonMutations from './mutations'
import * as githubMutations from './github/mutations'

export const mutations = { ...commonMutations, ...githubMutations }

const genCommit =
  (name: Provider) =>
  (mutation: string, ...params: any[]): void => {
    const mutationsProviders: Record<Provider, Record<string, any>> = {
      github: githubMutations,
    }

    const _mutations = mutationsProviders[name]
    const mutationReducer = _mutations[mutation]

    if (mutationReducer) mutationReducer(...params)
  }

const hasMutation = (mutation: MutationName) =>
  Object.keys(mutations).includes(mutation)

const useStore = (name: Provider = 'github') => {
  return {
    state,

    hasMutation,
    commit: genCommit(name),

    hasAction,
    dispatch: genDispatch(name),
  }
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

export type MutationName = keyof typeof mutations
