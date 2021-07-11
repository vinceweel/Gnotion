import { Ref, ref } from 'vue'

export const useIntersection = (
  options: Options = {},
): [Ref<boolean>, (s: selector) => void] => {
  const status = ref(!!options?.appear)

  const callback: IntersectionObserverCallback = ([entry]) => {
    console.log(entry)
    const { isIntersecting, boundingClientRect, intersectionRect } = entry
    // if (boundingClientRect.y !== intersectionRect.y) return
    status.value = isIntersecting
  }

  const observer = new IntersectionObserver(callback, {
    root: options?.root ?? document,
    rootMargin: `${options?.margin ?? 0}px`,
    threshold: options?.threshold ?? 1,
  })

  const observe = (selector: selector) => {
    const target =
      typeof selector === 'string'
        ? document.querySelector(selector)
        : selector.value
    target && observer.observe(target)
  }

  return [status, observe]
}

export default useIntersection

type selector = Ref<HTMLElement | null> | string

type Options = {
  appear?: boolean
  root?: HTMLElement | null
  margin?: number
  threshold?: number
}
