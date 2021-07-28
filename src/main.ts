import 'normalize.css'

import ready from './ready'
const app = ready()

import i18n from './locale'
app.use(i18n)

app.mount('#app')
