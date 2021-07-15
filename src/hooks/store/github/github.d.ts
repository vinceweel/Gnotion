type apiBase = 'https://api.github.com' | string
type username = string
type nickname = string
type token = string
type reponame = string

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

declare class Issue {
  constructor(
    repository: reponame,
    auth?: Requestable['auth'],
    apiBase?: apiBase,
  )

  listIssues(options: IssueFilter): PromiseHttpRequest<IssueData[]>
}

declare class Github {
  constructor(auth?: Requestable['auth'], apiBase?: apiBase)

  getUser(user?: username): User
  getGist(id: string): Gist
  getIssues(user: username, repo: reponame): Issue
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

declare type PromiseHttpRequest<Data = any> = Promise<HttpRequest<Data>>

declare type UserProfile = {
  bio: string
  blog: string
  created_at: string
  email: string
  followers: number
  following: number
  name: nickname
  upated_at: string
} & UserData

declare type IssueData = {
  id: number
  author_association: 'OWNER' | string
  title: string
  body: string
  comments: number
  labels: IssueLabel[]
  locked: boolean
  number: number
  state: 'open' | 'closed' | 'all'
  updated_at: string
  user: UserData
}

declare type IssueFilter = {
  accept?: 'application/vnd.github.v3+json' | string
  filter?: 'assigned' | 'created' | 'mentioned' | 'subscribed' | 'all'
  state?: IssueData['state']
  labels?: string
  sort?: 'created' | 'updated' | 'comments'
  direction?: 'desc' | 'asc'
  since?: ISO_8601_Date
  collab?: boolean
  orgs?: boolean
  owned?: boolean
  pulls?: boolean
  per_page?: number // Default: 30
  page?: number // Default: 1
}

declare type UserData = {
  avatar_url: string
  id: number
  login: username
  type: 'User'
  url: string
}

declare type IssueLabel = {}

declare type ISO_8601_Date = string
