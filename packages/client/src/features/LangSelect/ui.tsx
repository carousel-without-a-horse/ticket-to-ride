import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button'
import { Tooltip } from '@/shared/ui/Tooltip'
import { useStore } from '@/shared/store'

export const LangSelect = observer(() => {
  const { lang, handleToggleLang } = useStore()
  const { i18n } = useTranslation()

  useEffect(() => {
    void i18n.changeLanguage(lang)
  }, [i18n, lang])

  const isEnglish = lang === 'en'

  const handleChange = () => {
    handleToggleLang(isEnglish ? 'ru' : 'en')
  }

  return (
    <Tooltip placement="bottom" title="English / Русский">
      <Button size="small" onClick={handleChange}>
        {isEnglish ? 'En' : 'Ru'}
      </Button>
    </Tooltip>
  )
})
