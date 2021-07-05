import Github from 'github-api'

import { ActionParams } from '../'

const auth: GithubAuth = {
    username: 'vinceweel',
    password: '11235813@Weel'
}

const github = new Github(auth)

export const readArticle = async (params: ActionParams) => {
    const data = await github.getUser('calesvolchen').getProfile()
    console.log(data)
    const img = new Image(500, 500)
    img.src = data.data.avatar_url
    document.body.appendChild(img)
}

export const readComments = () => {}

type GithubAuth = {
    username?: string
    password?: string
    token?: string
}
