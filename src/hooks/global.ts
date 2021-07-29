import { reactive, ref } from 'vue'
import { getStorage } from '../functions'

export const useConfig = () => {
  const config = reactive(getStorage<Config>('_gnotion_config'))
  return [config]
}

export const useSettings = () => {
  const settings = reactive(getStorage<Settings>('_gnotion_settings'))
  return [settings]
}

export const useAccessToken = (bearer: boolean = false) => {
  const token = getStorage('_gnotion_access_token')
  const [
    {
      authorization: { token: ownerToken },
    },
  ] = useConfig()
  return `Bearer ghp_${token ?? ownerToken}`
}

export const useToggle = (init: boolean = false) => {
  const status = ref(init)
  const toggle = (_status?: boolean) => {
    status.value = _status ?? !status.value
  }
  const close = () => toggle(false)
  const open = () => toggle(true)
  return <const>[status, { toggle, close, open }]
}
