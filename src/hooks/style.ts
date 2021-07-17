import { ref, unref } from 'vue'
import type { Ref } from 'vue'
import reduceCssCalc from 'reduce-css-calc'

export const useSize = (num: Size | UnitSize = 0, unit: Unit = 'px') => {
  const getSize = (_num: typeof num, _unit: typeof unit = unit) =>
    new RegExp(_unit).test(`${_num}`) ? `${_num}` : `${_num}${_unit}`

  const size: Ref<UnitSize> = ref(getSize(num, unit))

  let unSize = unref(size)

  const change = (_num: typeof num = 0, _unit: typeof unit = unit) => {
    size.value = getSize(_num, _unit)
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

export const useOpacity = (num: number = 1) => {
  const opacity = ref(num)

  let unOpacity = unref(opacity)

  const change = (_num: typeof num) => {
    opacity.value = _num
    unOpacity = unref(opacity)
  }

  const toggle = (close?: boolean) => {
    opacity.value = close ?? opacity.value === unOpacity ? 0 : unOpacity
  }

  return <const>[opacity, { change, toggle }]
}
