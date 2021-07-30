import { request } from 'https://cdn.pika.dev/@octokit/request'
import { graphql } from 'https://cdn.skypack.dev/@octokit/graphql'

import { useAccessToken, useConfig } from './global'

export const useGithub = () => {
  const [
    {
      repository: { name: repo, owner },
    },
  ] = useConfig()

  const defaults = {
    repo,
    owner,
    headers: {
      authorization: useAccessToken(true),
    },
  }
  return {
    graphql: graphql.defaults(defaults),
    rest: request.defaults(defaults),
  }
}

export const useGithubData = <T = any>(
  response: ReturnType<typeof request>,
  defaultData?: T,
) => {
  return response.then(({ data }: { data: T }) => data ?? defaultData)
}
