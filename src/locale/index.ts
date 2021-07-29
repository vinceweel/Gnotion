import { ref } from 'vue'
import { createI18n, I18nOptions } from 'vue-i18n'

import en from './en'
import zh from './zh'

export const localeRef = ref(navigator.language)

const i18nOptions: I18nOptions = {
  legacy: false,
  locale: localeRef.value,
  fallbackWarn: false,
  fallbackLocale: 'en',
  messages: {
    en,
    zh: { ...en, ...zh },
    'en-US': en,
    'zh-CN': { ...en, ...zh },
  },
}

const i18n = createI18n(i18nOptions)

export default i18n
