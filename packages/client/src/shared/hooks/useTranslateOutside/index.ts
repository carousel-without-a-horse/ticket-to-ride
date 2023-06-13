import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const useTranslateOutside = <T>(getData: () => T): T => {
  const [data, setData] = useState(getData())

  const { i18n } = useTranslation()
  i18n.on('languageChanged', () => {
    setData(getData())
  })

  return data
}
