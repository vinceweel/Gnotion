import {
  computed,
  isRef,
  reactive,
  ref,
  toRefs,
  unref,
  watch,
  watchEffect,
} from 'vue'
import type { Ref, ComputedRef } from 'vue'

import { debounce, merge, throttle } from '../functions'

import useConsole from './console'
const { error } = useConsole('hook: scrolling')

const defaultOptions: Options = {
  target: null,
  optimization: 'throttle',
  throttle: { wait: 300 },
  debounce: { wait: 200, immediate: true },
}

export const useScrolling = (options: Options = {}) => {
  const { target, optimization, ...opt } = merge(defaultOptions, options)

  const targetRef = isRef(target) ? target : ref(target)
  const targetMeta = reactive({
    scrollHeight: 0,
    scrollWidth: 0,
    height: 0,
    width: 0,
  })

  const distance: { x: number; y: number } = reactive({ x: 0, y: 0 })
  const offset: { x: number; y: number } = reactive({ x: 0, y: 0 })

  const axis: Ref<ScrollAxis> = ref(null)

  /* custom listener list */ const listeners: Ref<ListenerOption[]> = ref([])

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
    if (optimization === 'debounce') {
      const { wait, immediate } = opt.debounce!
      return debounce(listener, wait!, immediate)
    }

    if (optimization === 'throttle') {
      const { wait } = opt.throttle!
      return throttle(listener, wait!)
    }

    return listener
  }

  const mountListener = (target = targetRef.value) => {
    if (target === null)
      return error(
        `can not mount 'scroll' event listener for the target: "${target}"`,
      )

    const { scrollHeight, scrollWidth, clientHeight, clientWidth } = target!

    Object.assign(targetMeta, {
      scrollHeight,
      scrollWidth,
      height: clientHeight,
      width: clientWidth,
    })

    target!.addEventListener('scroll', listenerFn(), false)
  }

  if (targetRef.value !== null) mountListener()

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

  const scroll = (options: ScrollToOptions, target = targetRef.value) =>
    target!.scrollTo(merge({ top: 0, left: 0, behavior: 'smooth' }, options))
  const scrollY = (top: number, smooth: boolean = true) =>
    scroll({ top, behavior: smooth ? 'smooth' : 'auto' })
  const scrollX = (left: number, smooth: boolean = true) =>
    scroll({ left, behavior: smooth ? 'smooth' : 'auto' })

  return <const>[
    { targetRef, targetMeta, axis, offset, distance },
    {
      mountListener,
      addListener,
      removeListener,
      scroll,
      scrollY,
      scrollX,
    },
  ]
}

export const useDirection = ({
  distance,
  axis,
}: Pick<ScrollingReturnData, 'axis' | 'distance'>) => {
  const direction: ComputedRef<ScrollDirection> = computed(() => ({
    x: distance!.x < 0 ? 'left' : 'right',
    y: distance!.y < 0 ? 'up' : 'down',
  }))

  const isDirection = (_direction: ScrollDirection[keyof ScrollDirection]) => {
    if (axis.value === null) return false
    return direction.value[axis!.value] === _direction
  }

  const isDown = () => isDirection('down')

  return <const>[direction, { isDirection, isDown }]
}

export const usePosition = (
  { offset, targetMeta }: Pick<ScrollingReturnData, 'offset' | 'targetMeta'>,
  options: { centerRatio?: number; start?: number; end?: number } = {},
) => {
  const { centerRatio, start, end } = merge(
    { centerRatio: 1, start: 10, end: 10 },
    options,
  )

  const position: ComputedRef<ScrollPosition> = computed(() => {
    const { scrollHeight, height, scrollWidth, width } = targetMeta

    const getPosition = (
      /* scroll size */ ss: number,
      /* viewport size */ vs: number,
      axis: 'x' | 'y',
    ) => {
      const range = (vs / 10 / (vs / ss)) * centerRatio!

      if (Math.abs(ss - vs - offset[axis] * 2) < range) return 'center'
      if (ss - vs - offset[axis] <= end!) return 'end'
      if (offset[axis] <= start!) return 'start'

      return 'nearest'
    }

    return {
      x: getPosition(scrollWidth, width, 'x'),
      y: getPosition(scrollHeight, height, 'y'),
    }
  })

  return [position]
}

export const useIntersection = ({
  offset,
  targetMeta,
}: Pick<ScrollingReturnData, 'offset' | 'targetMeta'>) => {
  const targetRef: Ref<Element | null> = ref(null)

  const rectMeta = reactive({ x: 0, y: 0 })

  const interRect = computed(() => {
    const { height, width } = toRefs(targetMeta)
    const { x, y } = rectMeta
    return {
      x: 0 <= x && x <= width.value ? x : null,
      y: 0 <= y && y <= height.value ? y : null,
    }
  })

  const observe = (_target: Ref<Element | null> = targetRef) => {
    const target = isRef(_target) ? unref(_target) : _target

    const updateRect = () => {
      const { x, y } = target!.getBoundingClientRect()
      Object.assign(rectMeta, { x, y })
    }

    watchEffect(() => updateRect()! || watch(offset, updateRect))
  }

  const isInter = (axis: 'x' | 'y') => computed(() => !!interRect.value[axis])

  return <const>[
    { targetRef, rectMeta, interRect },
    { observe, isInter },
  ]
}

export default useScrolling

type ScrollingReturnData = ReturnType<typeof useScrolling>[0]

type listener = (ev: Event) => void
type ListenerOption = [listener, { symbol: Symbol }]

type ScrollDirection = { x: 'left' | 'right'; y: 'up' | 'down' }

type position = 'center' | 'end' | 'nearest' | 'start'
type ScrollPosition = { x: position; y: position }
type ScrollAxis = 'x' | 'y' | null

type Options = {
  target?: ScrollTarget
  optimization?: 'throttle' | 'debounce'
  debounce?: {
    wait?: number
    immediate?: boolean
  }
  throttle?: {
    wait?: number
  }
}

type ScrollTarget = Element | null | Ref<Element | null>
