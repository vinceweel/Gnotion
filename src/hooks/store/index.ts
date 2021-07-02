import { reactive } from 'vue'
export * as actions from './actions'

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

type ActionName = string
type ActionParams = { [k: string]: unknown }
type Action = {
    type: ActionName
    payload?: ActionParams
    meta?: Action['payload']
    error?: null | Error | string
}

const dispatch = (action: ActionName, params: ActionParams = {}) => {
    console.log(params)
    return {
        action,
        data: { test: true, ...params }
    }
}

const useStore = (provider: Provider) => {
    return { dispatch }
}

export default useStore

export type Provider = 'github' | 'other'
export type Engine = 'issue' | 'repo' | 'webdav' | 'wiki'