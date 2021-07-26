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
type Settings = {
  theme: {
    mode: 'light' | 'dark'
  }
}
type Config = {
  auth: {
    token: string
  }
}
declare var GNotion: {
  initCustom: (context: Context) => {
    settings: Settings
    config: Config
  }
}

declare type storagePrefix = `_gnotion`
declare type storageKeys =
  | `${storagePrefix}_settings`
  | `${storagePrefix}_config`
  | `${storagePrefix}_access_token`
