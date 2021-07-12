import { createI18n, I18nOptions } from 'vue-i18n'

const en = {
  search: 'Search',
  avatar: 'Avatar',
  guest: 'Guest',
  slogn: 'Login from Github >>',
  settings: 'Settings',

  repo_link: 'Github Repo',
  editor_placeholder: 'Want to Say Something ? ...',
  more_menu: 'More Actions',
}

const zh = {
  ...en,
  search: '搜索',
  avatar: '头像',
  guest: '看客',
  slogn: '通过 Github 登陆 >>',
  settings: '设置',
    
  repo_link: 'Github 仓库',
  editor_placeholder: '不想说点啥么？……',
  more_menu: '更多操作',
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
