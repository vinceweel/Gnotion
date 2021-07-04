import VConsole from 'vconsole'

if (location.search.includes('debug')) {
  const vConsole = new VConsole()
  if (location.search.includes('debug=false')) vConsole.destroy()
}

import 'normalize.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
