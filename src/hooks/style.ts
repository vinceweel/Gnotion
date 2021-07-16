import { ref } from 'vue'
import type { Ref } from 'vue'

export const useSize = (num: Size = 0, unit: Unit = 'px') => {
  const size: Ref<UnitSize> = ref(`${num}${unit}`)
  const change = (num: Size = 0) => (size.value = `${num}${unit}`)
  return <const>[size, change]
}

type Size = number
type Unit = 'px' | '%' | 'vh' | 'vw' | 'em' | 'rem'
type UnitSize = string
