import { computed, isRef, reactive, ref, unref } from 'vue'
import type { Ref, ComputedRef } from 'vue'

import { debounce, merge, throttle } from '../functions'

import useConsole from './console'
const { error } = useConsole('hook: scrolling')

/* debounce & throttle waiting time */ const WAIT_TIME = 200

export const useScrolling = (target: ScrollTarget, options: Params) => {
  const {
    position: { centerRatio },
    ...opt
  } = <Options>merge<Params>(
    {
      position: {
        centerRatio: 1,
      },
      throttle: { wait: WAIT_TIME },
      debounce: { wait: WAIT_TIME, immediate: true },
    },
    options,
  )

  const refTarget = computed(() => (isRef(target) ? unref(target) : target))
  const targetMeta = reactive({
    scrollHeight: 0,
    scrollWidth: 0,
    height: 0,
    width: 0,
  })

  const distance: { x: number; y: number } = reactive({ x: 0, y: 0 })
  const offset: { x: number; y: number } = reactive({ x: 0, y: 0 })

  const axis: Ref<ScrollAxis> = ref(null)

  const direction: ComputedRef<ScrollDirection> = computed(() => ({
    x: distance.x < 0 ? 'left' : 'right',
    y: distance.y < 0 ? 'up' : 'down',
  }))

  const position: ComputedRef<ScrollPosition> = computed(() => {
    const { scrollHeight, height, scrollWidth, width } = targetMeta

    const getPosition = (
      ss: number, // scroll size
      vs: number, // viewport size
      axis: 'x' | 'y',
    ) => {
      const range = (vs / 10 / (vs / ss)) * centerRatio

      if (Math.abs(ss - vs - offset[axis] * 2) < range) return 'center'
      if (ss - vs - offset[axis] <= 0) return 'end'
      if (offset[axis] <= 0) return 'start'

      return 'nearest'
    }

    return {
      x: getPosition(scrollWidth, width, 'x'),
      y: getPosition(scrollHeight, height, 'y'),
    }
  })

  /* custom listener list */ const listeners: Ref<ListenerOption[]> = ref([])

  const addListener = (listener: listener) => {
    const symbol = Symbol(listener.toString())
    listeners.value.push([listener, { symbol }])
    return symbol
  }

  const removeListener = (listenerSymbol: Symbol) => {
    listeners.value = listeners.value.filter(
      ([, { symbol }]) => symbol !== listenerSymbol,
    )
  }

  const listener: listener = (ev) => {
    const { scrollTop: y = 0, scrollLeft: x = 0 } = ev.target as Element

    axis.value = offset.x !== x ? 'x' : offset.y !== y ? 'y' : null

    Object.assign(distance, {
      x: axis.value === 'x' ? x - offset.x : distance.x,
      y: axis.value === 'y' ? y - offset.y : distance.y,
    })
    Object.assign(offset, { x, y })

    const _listeners = computed(() =>
      listeners.value.filter(([listener]) => typeof listener === 'function'),
    )

    if (_listeners.value.length)
      for (const [listener] of _listeners.value) listener(ev)
  }

  const listenerFn: () => listener = () => {
    if (opt.debounce) {
      const { wait, immediate } = opt.debounce
      return debounce(listener, wait, immediate)
    }

    if (opt.throttle) {
      const { wait } = opt.throttle
      return throttle(listener, wait)
    }

    return listener
  }

  const mountListener = (target = refTarget.value) => {
    if (target === null)
      return error(
        `can not mount 'scroll' event listener for the target: "${target}"`,
      )

    const { scrollHeight, scrollWidth, clientHeight, clientWidth } = target

    Object.assign(targetMeta, {
      scrollHeight,
      scrollWidth,
      height: clientHeight,
      width: clientWidth,
    })

    target.addEventListener('scroll', listenerFn(), false)
  }

  if (refTarget.value !== null) mountListener()

  const scroll = (options: ScrollToOptions, target = refTarget.value) =>
    target!.scrollTo(merge({ top: 0, left: 0, behavior: 'smooth' }, options))
  const scrollY = (top: number) => scroll({ top })
  const scrollX = (left: number) => scroll({ left })

  return <const>[
    { axis, offset, direction, distance, position },
    { mountListener, addListener, removeListener, scroll, scrollY, scrollX },
  ]
}

export default useScrolling

type listener = (ev: Event) => void
type ListenerOption = [listener, { symbol: Symbol }]

type ScrollDirection = { x: 'left' | 'right'; y: 'up' | 'down' }

type position = 'center' | 'end' | 'nearest' | 'start'
type ScrollPosition = { x: position; y: position }
type ScrollAxis = 'x' | 'y' | null

type Params = {
  position?: {
    centerRatio?: number | 1 | 0 | 0.5
  }
  debounce?: {
    wait?: number
    immediate?: boolean
  }
  throttle?: {
    wait?: number
  }
}

type ScrollTarget = Element | null | Ref<Element | null>
type Options = {
  position: {
    centerRatio: number | 1 | 0 | 0.5
  }
  debounce: {
    wait: number
    immediate: boolean
  }
  throttle: {
    wait: number
  }
}
