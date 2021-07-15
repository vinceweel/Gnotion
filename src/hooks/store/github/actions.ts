import moment from 'moment'
import { Action } from '..'

export const init: Action<void> = async (
  { state },
  { sources, settings }: Gnotion,
) => {
  state['settings'] = settings
  state['sources'] = sources
}

export const getIssues: Action<Issue> = async ({ state, github }) => {
  const {
    source: { username, reponame },
  } = state
  return await github.getIssues(username!, reponame!)
}

export const readArticle: Action<any> = async (ctx, params: {}) => {
  const { github, log, state } = ctx
  log(github, state.source)
  // const data = await github.getUser('calesvolchen').getProfile()
  // console.log(data.data.login)
  return { test: 'test', ...params } as any
}

export const readComments = () => ({ a: 'a' })

export const getArticleList: Action<List> = async (ctx, ...params) => {
  const { state } = ctx
  const issueList = async () => {
    const list = await (await (await getIssues(ctx)).listIssues({})).data
    return list.map(({ id, title: _title, updated_at: updated }) => {
      const [title, description] = _title.split(
        state.settings.title_description_separator!,
      )
      return {
        id,
        title,
        description,
        updated: moment(updated).fromNow(),
      }
    })
  }
  const list = await {
    issues: issueList,
    repo: () => [],
    wiki: () => [],
    gist: () => [],
  }[state.source.type]()

  return list
}

type List = ListItem[]
type ListItem = {
  id: number
  title: string
  description?: string
  labels?: Label[]
  updated?: string
}

type Label = {
  id: number
  name: string
}
