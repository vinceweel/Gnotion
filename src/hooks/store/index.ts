import { reactive } from 'vue'
import Github from 'github-api'
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

  sources: [] as Source[],
  source: {
    provider: 'github',
    type: 'issues',
    url: 'https://github.com/vinceweel/Gnotion',
  } as Source,
})

export const actionContext = reactive({
  ...useConsole('action'),
  state,
  get github() {
    return new Github(state.source)
  },
})

// export const github = computed(() => new Github(state.source))

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

    if (actionReducer) return actionReducer(actionContext, ...params)

    useConsole('store').error(
      `cannot dispatch the action named "${action}", maybe it is not exist?`,
    )
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
// export type ActionParams = Record<string, any>
// export type Action = {
//   type: ActionName
//   payload?: ActionParams
//   meta?: Action['payload']
//   error?: null | Error | string
// }

export type MutationName = keyof typeof mutations

export type ActionContext = typeof actionContext
export type Action<T> = (context: ActionContext, ...params: any[]) => Promise<T>
