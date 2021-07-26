import { ref, watchEffect } from 'vue'
import { merge, throttle } from '../functions'

type Options = {
  timeout?: number
  delay?: number
  contentType?: 'json' | 'text'
} & RequestInit

const fetchData = <Data>(input: RequestInfo, options?: Options) =>
  new Promise<Data>((resolve, reject) => {
    const { timeout, delay, contentType, ...init } = <Required<Options>>merge(
      {
        timeout: 15000,
        delay: 0,
        contentType: 'text',
        headers: {},
      },
      options ?? {},
    )

    const _fetch = () =>
      new Promise<Data>((resolve, reject) => {
        globalThis
          .fetch(input, init)
          .then((ret) => ret[contentType]())
          .then(resolve)

        const timer: NodeJS.Timeout = globalThis.setTimeout(() => {
          reject('timeout')
          clearTimeout(timer)
        }, timeout)
      })
        .then(resolve)
        .catch(reject)

    if (!delay || delay === 0) return throttle(_fetch, 2000)()

    const timer: NodeJS.Timeout = globalThis.setTimeout(() => {
      _fetch()
      clearTimeout(timer)
    }, delay)
  })

export const useFetch = <Data>(
  ...[input, option]: Parameters<typeof fetchData>
) => {
  const loading = ref<boolean>(false)
  const error = ref<null | Error['message']>()
  const data = ref<Data>()

  watchEffect(async () => {
    loading.value = true
    try {
      data.value = await fetchData<Data>(input, option)
      error.value = null
    } catch (_error) {
      error.value = _error
    }
    loading.value = false
  })

  return [{ error, data, loading }]
}

export default useFetch
