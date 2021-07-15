import VConsole from 'vconsole'

if (location.search.includes('debug')) {
  const vConsole = new VConsole()
  if (location.search.includes('debug=false')) vConsole.destroy()
}

import 'normalize.css'
import { createApp, Ref } from 'vue'

import App from './App.vue'
const app = createApp(App)

import i18n from './i18n'
app.use(i18n)

import moment from 'moment'
import 'moment/dist/locale/zh-cn'
moment.locale(
  (i18n.global.locale as unknown as Ref<typeof i18n.global.locale>).value,
)

import Api from './components/core/Api.vue'
app.component('Api', Api)
import Icon from './components/core/Icon.vue'
app.component('Icon', Icon)

import useStore from './hooks/store'
useStore().dispatch('init')(globalThis.gnotion)

app.mount('#app')
