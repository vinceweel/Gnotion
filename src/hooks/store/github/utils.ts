import { Ref } from 'vue'

export const useCurry = function (func: Function) {
  return function curried (this: any, ...args: any[]) {
    if (args.length >= func.length) return func.apply(this, args)
    return (..._args: ConcatArray<any>[]) => {
      return curried.apply(this, args.concat(_args))
    }
  }
}

export const useProcess = () => {
  const sleep = (timeout: number) =>
    new Promise(resolve => {
      const id = setTimeout(() => {
        resolve(id)
        clearTimeout(id)
      }, timeout)
    })

  const countdown = (second: Ref<number>, interval: number = 1000) =>
    new Promise(resolve => {
      const id = setInterval(() => {
        resolve(second.value--)
        if (second.value <= 0) clearInterval(id)
      }, interval)
    })

  return { sleep, countdown }
}
