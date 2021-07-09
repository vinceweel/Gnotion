import { createI18n, I18nOptions } from 'vue-i18n'

const en = {
  search: 'Search',
  avatar: 'Avatar',
  guest: 'Guest',
  slogn: 'Login from Github >>'
}

const zh = {
  ...en,
  search: '搜索',
  avatar: '头像',
  guest: '看客',
  slogn: '通过 Github 登陆 >>'
}

const i18nOptions: I18nOptions = {
  legacy: false,
  locale: navigator.language,
  fallbackWarn: false,
  fallbackLocale: 'en',
  messages: {
    en,
    'en-US': en,
    zh,
    'zh-CN': zh,
  },
}

const i18n = createI18n(i18nOptions)

export default i18n
