import tomlSettings from './settings.js'
import tomlConfig from './config.js'

const initCustom = (context = {}) => {
  const {
    runtime: { parse },
  } = context

  const settings = parse(tomlSettings)
  const config = parse(tomlConfig)

  return { settings, config }
}

Object.assign(globalThis, { GNotion: { initCustom } })
