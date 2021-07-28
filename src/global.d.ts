declare module 'reduce-css-calc' {
  export type CalcExpression = `calc(<Express>)` | string
  const calc: (expression: CalcExpression, precision?: number) => string
  export default calc
}

declare module 'https://cdn.pika.dev/@octokit/request' {
  export const request: import('@octokit/types').RequestInterface<object>
}

declare module 'https://cdn.skypack.dev/@octokit/graphql' {
  export const graphql: import('@octokit/graphql/dist-types/types').graphql
}

type Context = {
  runtime: {
    parse: <T>(toml: string) => T
  }
}
declare type Settings = {
  theme: {
    mode: 'light' | 'dark'
  }
}
declare type Config = {
  authorization: {
    token: string
    client_id: string
    client_secret: string
  }
  notion: {
    source: 'issues' | 'branch' | 'wiki'
  }
  repository: {
    name: string
    owner: string
  }
}
declare var GNotion: {
  initCustom: (context: Context) => void
  settings: Settings
  config: Config
}

declare type storagePrefix = `_gnotion`
declare type storageKeys =
  | `${storagePrefix}_settings`
  | `${storagePrefix}_config`
  | `${storagePrefix}_access_token`
