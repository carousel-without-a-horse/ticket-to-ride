import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { observer } from 'mobx-react-lite'

import { Button } from '@/shared/ui/Button'
import { Tooltip } from '@/shared/ui/Tooltip'
import { settingsServices } from '@/entities/settings'
import { Lang } from '@/shared/store/types'
import { useStore } from '@/shared/store'
import { useDebounce } from '@/shared/hooks'

export const LangSelect = observer(() => {
  const { i18n } = useTranslation()
  const queryClient = useQueryClient()
  const { langId, setLangId, settings } = useStore()

  const { data } = useQuery({
    queryKey: ['settings'],
    queryFn: settingsServices.read,
    staleTime: Infinity,
  })

  const { mutateAsync } = useMutation({
    mutationKey: ['settings'],
    mutationFn: () => settingsServices.update(settings),
    onSuccess: data => {
      queryClient.setQueryData(['settings'], data)
    },
  })

  useDebounce(() => mutateAsync(), 500, [settings.langId])

  useEffect(() => {
    if (!data?.langId) return
    setLangId(data?.langId)
  }, [data?.langId, setLangId])

  useEffect(() => {
    void i18n.changeLanguage(Lang[langId])
  }, [langId, i18n])

  const handleChange = useCallback(() => {
    const nextLangId = data?.langId === Lang.ru ? Lang.en : Lang.ru
    setLangId(nextLangId)
  }, [data?.langId, setLangId])

  return (
    <Tooltip placement="bottom" title="English / Русский">
      <Button size="small" onClick={handleChange}>
        {Lang[langId === Lang.ru ? Lang.en : Lang.ru].toUpperCase()}
      </Button>
    </Tooltip>
  )
})
