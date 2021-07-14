import { Action } from ".."

export const init: Action<void> = async ({ state }, { sources }: Gnotion) => {
  state['sources'] = sources
}

export const readArticle: Action<any> = async ({ log, state }, params: {}) => {
  log(state.source)
  // const data = await github.getUser('calesvolchen').getProfile()
  // console.log(data.data.login)
  return { test: 'test', ...params } as any
}

export const readComments = () => ({ a: 'a' })


