import { useGithubData } from '../../api'
import { defineAsyncData } from '../define'
import { parser as parserUser } from './user'

export default defineAsyncData(async ({ github: { rest } }) => {
  const data = await useGithubData<any[]>(
    rest('GET /repos/{owner}/{repo}/issues'),
    [],
  )
  console.log(data)
  return data?.map(
    ({
      id,
      title,
      comments,
      state,
      labels,
      updated_at: updated,
      url,
      user,
    }) => ({
      id,
      title,
      comments,
      state,
      labels,
      updated,
      url,
      ...parserUser(user),
    }),
  )
})
