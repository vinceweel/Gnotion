import tomlSettings from './settings.js'
import tomlConfig from './config.js'

const GNotion = {}

const initCustom = (context = {}) => {
  const {
    runtime: { parse },
  } = context

  const settings = parse(tomlSettings)
  const config = parse(tomlConfig)

  Object.assign(GNotion, { settings, config })
}

Object.assign(GNotion, { initCustom })
Object.assign(globalThis, { GNotion })
