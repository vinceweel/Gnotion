import { computed, ref } from 'vue'
import { merge, queryParams } from '../../functions'

const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize'
const GITHUB_OAUTH_CLIENT_ID = '5b8f9002667f35602d12'

export const useOauth = (options: { open?: boolean; key?: string } = {}) => {
  const { open, key } = merge(
    {
      open: false,
      key: 'code',
    },
    options,
  )

  const code = ref(queryParams(key!))
  const authed = computed(() => !!code.value)

  const toAuth = () => {
    const url = `${GITHUB_OAUTH_URL}?client_id=${GITHUB_OAUTH_CLIENT_ID}`
    if (open) globalThis.open(url)
    else globalThis.location.href = url
  }
  return <const>[{ code, authed }, { toAuth }]
}
