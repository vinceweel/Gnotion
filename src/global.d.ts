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
  tomlParser: (tomlContent: string) => any
}
declare var GNotion: {
  initCustom: (context: Context) => {}
}
