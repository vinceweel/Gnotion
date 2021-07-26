import settings from './settings.js'

const initCustom = (context = {}) => {
  const { tomlParser } = context
  const toml = tomlParser(settings)
  console.log(toml)
  
}

Object.assign(globalThis, { GNotion: { initCustom } })
