import { createI18n } from 'vue-i18n'
import en from './en.json'
import si from './si.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'EN',
  fallbackLocale: 'EN',
  messages: {
    EN: en,
    SI: si,
  },
})