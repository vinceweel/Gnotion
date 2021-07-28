import toml from 'toml'

import { createApp } from 'vue'
import App from './App.vue'

import { getStorage, setStorage } from './functions'

const { GNotion } = globalThis

const runtime = {
  parse: toml.parse,
}

export default () => {
  const context = { runtime }

  GNotion.initCustom(context)

  const { config, settings } = GNotion

  setStorage('_gnotion_config', config)
  setStorage('_gnotion_settings', settings)

  // console.table(getStorage('_gnotion_config'));
  // console.table(getStorage('_gnotion_settings'));

  return createApp(App)
}
