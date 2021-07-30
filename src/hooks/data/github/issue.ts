import { useGithubData } from '../../api'
import { defineAsyncData } from '../define'

export default defineAsyncData(async ({ github: { rest } }, { number }) => {
  const article = await useGithubData(
    rest(`GET /repos/{owner}/{repo}/issues/${number}`),
  )
  console.log(article)

  return article
})
