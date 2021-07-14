const sources = [
  {
    provider: 'github',
    type: 'issues',
    token: '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',
    url: 'https://github.com/vinceweel/Gnotion',
  },
]

window.globalThis.gnotion = { sources }

Object.keys(window.globalThis.gnotion).forEach((k) =>
  Object.defineProperty(window.globalThis.gnotion, k, {
    writable: false,
    configurable: false,
  }),
)
