declare var gnotion: Gnotion

type Gnotion = {
  sources: Source[]
}

type Source = {
  provider: 'github'
  type: 'issues' | 'repo' | 'gist' | 'wiki'
  token?: string
  url?: string
  username?: string
  reponame?: string
}
