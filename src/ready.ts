import toml from 'toml'

import type { App } from 'vue'
import { getStorage, setStorage } from './functions'

const {
  GNotion: { initCustom },
} = globalThis

const runtime = {
  parse: toml.parse,
}

export default (app: App<Element>) =>
  new Promise<typeof app>((resolve) => {
    const context = { runtime }

    const { config, settings } = initCustom(context)

    setStorage('_gnotion_config', config)
    setStorage('_gnotion_settings', settings)

    // console.table(getStorage('_gnotion_config'));
    // console.table(getStorage('_gnotion_settings'));

    resolve(app)
  })
