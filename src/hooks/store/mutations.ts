import { NotionComponentNames, state } from './'

export const _toggle_ = (name: NotionComponentNames, status: boolean) => {
  state[state._mode_][name] = status ?? !state[state._mode_][name]
}
