import TOML from 'toml'

import type { App } from 'vue'

const {
  GNotion: { initCustom },
} = globalThis

const { parse: tomlParser } = TOML

export default (app: App<Element>) =>
  new Promise<typeof app>((resolve) => {
    const context = { tomlParser }

    initCustom(context)
    resolve(app)
  })
