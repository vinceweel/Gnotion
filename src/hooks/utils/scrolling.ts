import { computed, nextTick, reactive, ref, Ref } from 'vue'
import { throttle } from 'lodash/fp'

type Options = {
  wait?: number
  observe?: Ref<Element>[]
}
type Intersection = {
  appear: boolean
}

export const useScrolling = (options: Options = {}) => {
  const { wait, observe: observeTargets } = {
    wait: 300,
    observe: [],
    ...options,
  }
  const _observeTargets = [...observeTargets]
  const _initTop = document.scrollingElement!.scrollTop

  const position = reactive({ x: 0, y: _initTop })
  const distance = reactive({ x: 0, y: 0 })

  const [isUp, isDown] = [
    computed(() => distance.y > 0),
    computed(() => distance.y < 0),
  ]

  const intersection: Ref<Intersection[]> = ref([])
  const observeIntersections = () => {
    intersection.value = _observeTargets.map(
      ({ value: target }: Ref<Element>) => {
        const { y } = target.getBoundingClientRect()
        return {
          appear: position.y - y > 0,
        }
      },
    )
  }
  const observe = (target: Ref<Element | null>) => {
    target.value && _observeTargets.push(target as Ref<Element>)
    nextTick(observeIntersections)
    // observeIntersections()
  }

  const listener = throttle(wait)(() => {
    const { scrollTop: y } = document.scrollingElement!
    const { y: _y } = position

    distance.y = _y - y
    position.y = y

    observeIntersections()
  })

  window.addEventListener('scroll', listener, false)

  const isIntersection = (target: null | HTMLElement): boolean => {
    if (target === null) return false
    const { y } = target.getBoundingClientRect()
    console.log(target, position.y, y)
    return position.y - y > 0
  }

  return {
    position,
    distance,
    isUp,
    isDown,
    intersection,
    observe,
    isIntersection,
  }
}

export default useScrolling
