declare module 'reduce-css-calc' {
  export type CalcExpression = `calc(<Express>)` | string
  const calc: (expression: CalcExpression, precision?: number) => string
  export default calc
}

declare module 'https://cdn.pika.dev/@octokit/request' {
  export const request: import('@octokit/types').RequestInterface<object>
}
