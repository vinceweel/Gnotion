import { Ref } from 'vue'

export const leftRef = (leftRefValue?: Ref<any>, rightRefValue?: Ref<any>) => {
  if (!leftRefValue) return rightRefValue

  if (leftRefValue.value === null || leftRefValue.value === undefined)
    return rightRefValue

  return leftRefValue
}

export const debounce = (
  func: (...args: any[]) => any,
  wait: number,
  immediate: boolean = false,
) => {
  let timeout: NodeJS.Timeout

  return (...args: any[]) => {
    if (timeout === undefined && immediate) func(...args)

    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const throttle = (func: (...args: any[]) => any, wait: number) => {
  let timeout: NodeJS.Timeout | void
  let previous: number = Date.now()

  return (...args: any[]) => {
    const remaining = wait - (Date.now() - previous)

    if (timeout !== undefined) return

    timeout = setTimeout(() => {
      previous = Date.now()

      timeout = clearTimeout(timeout!)

      func(...args)
    }, remaining)
  }
}

export const merge = <T extends Record<string | number, any>>(
  target: T,
  source: T,
) => {
  for (const key of Object.keys(source))
    if (source[key] instanceof Object)
      Object.assign(source[key], merge(target[key], source[key]))

  return Object.assign(target || {}, source) as T
}
