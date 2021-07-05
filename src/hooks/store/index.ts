import { reactive } from 'vue'
// import * as actions from './actions'
// import * as github from './github/actions'

// const actionsProviders: Record<Provider, Record<string, any>> = {
//     github,
// }

const theme = reactive({
    dark: false,
    light: true,
})

export const state = reactive({
    theme,
})

export type ActionName = string
export type ActionParams = { [k: string]: unknown }
export type Action = {
    type: ActionName
    payload?: ActionParams
    meta?: Action['payload']
    error?: null | Error | string
}

const genDispatch = (name: Provider) => async (
    action: ActionName,
    params: ActionParams = {},
) => {
    const actionsProviders: Record<Provider, Record<string, any>> = {
        github: await import('./github/actions'),
    }

    const actions = actionsProviders[name]
    const actionReducer = actions[action]

    if (actionReducer) return await actionReducer(params)

    return {
        action,
        data: { test: true, ...params },
    }
}
const useStore = (name: Provider = 'github') => {
    return { dispatch: genDispatch(name) }
}

export default useStore

export type Provider = 'github' | string
export type Engine = 'issue' | 'repo' | 'webdav' | 'wiki'
