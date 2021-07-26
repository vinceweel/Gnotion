import 'normalize.css'

import { createApp } from 'vue'
import App from './App.vue'

import i18n from './locale'

import ready from './ready'

ready(createApp(App))
  .then((app) => app.use(i18n))
  .then((app) => app.mount('#app'))
