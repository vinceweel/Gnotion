declare module 'reduce-css-calc' {
  export type CalcExpression = `calc(<Express>)` | string
  const calc: (expression: CalcExpression, precision?: number) => string
  export default calc
}
