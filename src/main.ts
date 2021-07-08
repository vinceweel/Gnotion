import VConsole from 'vconsole'

if (location.search.includes('debug')) {
  const vConsole = new VConsole()
  if (location.search.includes('debug=false')) vConsole.destroy()
}

import 'normalize.css'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import { createI18n, I18nOptions } from 'vue-i18n'
const i18nOptions: I18nOptions = {
  legacy: false,
  locale: navigator.language,
  fallbackWarn: false,
  fallbackLocale: 'en',
  messages: {
    en: {
      search: 'Search',
      avatar: 'Avatar',
    },
    get ['en-US']() {
      return this.en
    },
    zh: {
      search: '搜索',
      avatar: '头像',
    },
    get ['zh-CN']() {
      return this.zh
    },
  },
}
const i18n = createI18n(i18nOptions)
app.use(i18n)

app.mount('#app')
