import { createI18n, I18nOptions } from 'vue-i18n'

import en from './en'
import zh from './zh'

const i18nOptions: I18nOptions = {
  legacy: false,
  locale: navigator.language,
  fallbackWarn: false,
  fallbackLocale: 'en',
  messages: {
    en,
    zh: { ...en, ...zh },
    'en-US': en,
    'zh-CN': zh,
  },
}

const i18n = createI18n(i18nOptions)

export default i18n
