type apiBase = 'https://api.github.com' | string
type username = string
type nickname = string
type token = string

declare class Requestable {
  constructor(
    auth: Requestable['auth'],
    apiBase?: apiBase,
    AcceptHeader?: string,
  )
  public auth: {
    username?: username
    password?: string
    token?: token
  }
}

declare class User {
  constructor(
    username?: username,
    auth?: Requestable['auth'],
    apiBase?: apiBase,
  )

  getProfile(): Promise<HttpRequest<UserProfile>>
}

declare class Gist {
  constructor(id: string, auth: Requestable['auth'])
}

declare class Github {
  constructor(auth?: Requestable['auth'], apiBase?: apiBase)

  getUser(user?: string): User
  getGist(id: string): Gist
}

declare module 'github-api' {
  export default Github
}

declare interface HttpRequest<Data = any> {
  config: any
  data: Data
  status: Response['status']
  headers: Response['headers']
  request: XMLHttpRequest
  statusText: Response['statusText']
}

declare type UserProfile = {
  avatar_url: string
  bio: string
  blog: string
  created_at: string
  email: string
  followers: number
  following: number
  id: number
  login: username
  name: nickname
  type: 'User'
  upated_at: string
  url: string
}
