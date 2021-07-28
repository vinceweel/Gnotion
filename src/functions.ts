import { Ref } from 'vue'

export const notRef =
  (leftRefValue?: Ref<any>) => (rightRefValue?: Ref<any>) => {
    if (!leftRefValue) return rightRefValue

    if (leftRefValue.value === null || leftRefValue.value === undefined)
      return rightRefValue

    return leftRefValue
  }

export const not = (left: () => any) => (right: () => any) => {
  try {
    return left()
  } catch (error) {
    return right()
  }
}

export const debounce = (
  func: (...args: any[]) => any,
  wait: number,
  immediate: boolean = true,
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

  return (...args: any[]) => {
    if (timeout !== undefined) return

    timeout = setTimeout(() => {
      func(...args)
      timeout = clearTimeout(timeout! as unknown as undefined)
    }, wait)
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

export const queryParams = (key: string) =>
  new URLSearchParams(globalThis.location.search).get(key)

export const setStorage = <V = any>(key: storageKeys, value: V) =>
  globalThis.localStorage.setItem(
    key,
    typeof value === 'string' ? value : JSON.stringify(value),
  )

export const getStorage = <V = any>(key: storageKeys) =>
  <V>(
    ((value) => not(() => JSON.parse(value!))(() => value))(
      globalThis.localStorage.getItem(key),
    )
  )

export const sleep = (second: number = 0) =>
  new Promise((resolve) => globalThis.setTimeout(resolve, second * 1000))
