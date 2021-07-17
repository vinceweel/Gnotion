import { ref, unref } from 'vue'
import type { Ref } from 'vue'
import reduceCssCalc from 'reduce-css-calc'

const getSize = (num: Size | UnitSize, unit: Unit = 'px') =>
  new RegExp(unit).test(`${num}`) ? `${num}` : `${num}${unit}`

export const useSize = (num: Size | UnitSize = 0, unit: Unit = 'px') => {
  const size: Ref<UnitSize> = ref(getSize(num, unit))

  let unSize = unref(size)

  const change = (num: Size | UnitSize = 0, unit: Unit = 'px') => {
    size.value = getSize(num, unit)
    unSize = unref(size)
  }
  const calc = (expression: string, precision?: number) => {
    size.value = reduceCssCalc(
      `calc(${expression.replaceAll('$', size.value)})`,
      precision,
    )
    unSize = unref(size)
  }
  const toggle = (close?: boolean) => {
    size.value = getSize(close ?? size.value === unSize ? 0 : unSize)
  }

  return <const>[size, { calc, change, toggle }]
}

type Unit = 'px' | '%' | 'vh' | 'vw' | 'em' | 'rem' | ''
type Size = number
type UnitSize = string
