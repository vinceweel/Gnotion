import 'normalize.css'

import { createApp } from 'vue'

import App from './App.vue'
const app = createApp(App)

import i18n from './locale'
app.use(i18n)

app.mount('#app')
