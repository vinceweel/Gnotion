import { request } from 'https://cdn.pika.dev/@octokit/request'
import { graphql } from 'https://cdn.skypack.dev/@octokit/graphql'

import { useAccessToken } from './global'

export const useGithub = () => {
  const defaults = {
    headers: {
      authorization: useAccessToken(true),
    },
  }
  return {
    graphql: graphql.defaults(defaults),
    rest: request.defaults(defaults),
  }
}
