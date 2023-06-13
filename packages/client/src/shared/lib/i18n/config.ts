import i18n, { use } from 'i18next'
import { initReactI18next } from 'react-i18next'

import ru from './locales/ru.json'
import en from './locales/en.json'

await use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: 'ru',
  fallbackLng: 'ru',
})

export default i18n
