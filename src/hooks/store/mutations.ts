import { NotionComponentNames, state } from './'

export const _toggle_ = (target: NotionComponentNames) => {
  state[state._mode_][target] = !state[state._mode_][target]
}
