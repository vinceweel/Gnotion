import Github from 'github-api'

import { ActionParams } from '../'

const auth: GithubAuth = {}

const github = new Github(auth)

export const readArticle = async (params: ActionParams) => {
  // const data = await github.getUser('calesvolchen').getProfile()
  // console.log(data)
  // const img = new Image(500, 500)
  // img.src = data.data.avatar_url
  // document.body.appendChild(img)
  return { test: 'test' }
}

export const readComments = () => ({ a: 'a' })

type GithubAuth = {
  username?: string
  password?: string
  token?: string
}
