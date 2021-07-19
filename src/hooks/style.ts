import reduceCssCalc from 'reduce-css-calc'
import { computed, isRef, ref, unref } from 'vue'
import type { Ref } from 'vue'
import useConsole from './console'

export const useUnitSize = (
  num: Ref<Size> | Size = 0,
  unit: Unit | null = 'px',
) => {
  const size = isRef(num) ? num : ref(num)

  let unSize = unref(size)

  const getUnitSize = (size: Ref<Size>) =>
    unit === null ||
    !new RegExp(`\\d$`).test(`${size.value}`) ||
    /^calc/.test(`${size.value}`)
      ? size.value
      : `${size.value}${unit}`

  const change = (_num: Size = 0) => {
    size.value = _num
    unSize = unref(size)
  }

  const calc = (expression: string | CallableFunction, precision?: number) => {
    if (typeof expression === 'string') {
      try {
        size.value = reduceCssCalc(
          `calc(${expression.replaceAll('$', `${getUnitSize(size)}`)})`,
          precision,
        )
        unSize = unref(size)
      } catch ({ message }) {
        useConsole('hook: use_unit_size').error(message)
      }
      return computed(() => getUnitSize(size))
    } else {
      return computed(() => `calc(${expression()})`)
    }
  }

  const toggle = (close?: boolean) => {
    size.value = close ?? size.value === unSize ? 0 : unSize
  }

  return <const>[computed(() => getUnitSize(size)), { calc, change, toggle }]
}

type Unit = 'px' | '%' | 'vh' | 'vw' | 'em' | 'rem' | ''
type UnitSize = string
type Size = number | UnitSize

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
