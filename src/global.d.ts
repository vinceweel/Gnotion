declare var gnotion: Gnotion

type Gnotion = {
  settings: Settings
  sources: Source[]
}

type Settings = {
  title_description_separator?: string | RegExp
}

type Source = {
  provider: 'github'
  type: 'issues' | 'repo' | 'gist' | 'wiki'
  token?: string
  url?: string
  username?: string
  reponame?: string
}
