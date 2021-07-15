import { Action } from '..'

export const init: Action<void> = async ({ state }, { sources }: Gnotion) => {
  state['sources'] = sources
}

export const getIssuesAsList: Action<any> = async ({ log, state, github }) => {
  const {
    source: { username, reponame },
  } = state
  const issues = await github.getIssues(username!, reponame!)
  log(issues)
  return issues.listIssues({ state: 'all' })
}

export const readArticle: Action<any> = async (ctx, params: {}) => {
  const { github, log, state } = ctx
  log(github, state.source)
  // const data = await github.getUser('calesvolchen').getProfile()
  // console.log(data.data.login)
  return { test: 'test', ...params } as any
}

export const readComments = () => ({ a: 'a' })

export const getList: Action<List> = async (ctx, ...params) => {
  const { state } = ctx
  const list = await {
    issues: () => getIssuesAsList(ctx, ...params),
    repo: () => [],
    wiki: () => [],
    gist: () => [],
  }[state.source.type]()
  ctx.log(list)

  return []
}

type List = ListItem[]
type ListItem = {
  id: number
  title: string
  description?: string
  tags?: Tag[]
}

type Tag = {
  id: number
  name: string
}
