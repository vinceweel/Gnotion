import { defineAsyncComponent } from 'vue'

const components = Object.entries(import.meta.glob('./**/*.vue'))
  .filter(([k]) => !/\/icons\//.test(k))
  .map(([k, v]) => {
    const path = k.match(/.+\/(.+?)\.vue$/)
    return [path && path[1], defineAsyncComponent(v)]
  })

export default Object.fromEntries(components)

export { default as Icon } from './core/Icon.vue'
export { default as Api } from './core/Api.vue'

export { default as Avatar } from './Avatar.vue'

export { default as Search } from './notion/Search.vue'
