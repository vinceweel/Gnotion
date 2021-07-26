import { computed, ref, unref, watchEffect } from 'vue'
import { merge, queryParams } from '../../functions'

import useFetch from '../fetch'

const {
  VITE_GITHUB_CLIENT_ID: githubClientId,
  VITE_GITHUB_CLIENT_SECRET: githubClientSecret,
  VITE_GITHUB_OAUTH_URL: githubOAuthUrl,
  VITE_GITHUB_OAUTH_TOKEN_URL: gitubOAuthTokenUrl,
} = import.meta.env

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

  const token = ref()
  const completeAuth = async (code: string) => {
    console.log('--->', code)

    globalThis.history.replaceState(
      null,
      globalThis.document.title,
      globalThis.location.pathname,
    )

    const [ret] = useFetch<string>(
      `https://cors-anywhere.herokuapp.com/${gitubOAuthTokenUrl}?client_id=${githubClientId}&client_secret=${githubClientSecret}&code=${code}`,
      {
        // method: 'get',
        // contentType: 'json',
        // headers: {
        //   Accept: 'application/json',
        //   Authorization: 'Bearer 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',
        // },
      },
    )
    console.log('--->', ret)
    token.value = ret.data?.value
  }

  if (unref(authed)) completeAuth(code.value!)

  const toAuth = () => {
    const url = `${githubOAuthUrl}?client_id=${githubClientId}`
    if (open) globalThis.open(url)
    else globalThis.location.href = url
  }

  return <const>[{ code, token, authed }, { toAuth }]
}
