import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'

import { useForm } from '@/shared/hooks'
import { themeServices } from '@/entities/theme'

import ThemeForm from '../../ui/ThemeForm'

import schema from './schema'

import type { TUseForm } from './types'

const CreateThemePage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [isLoading, setLoading] = useState(false)

  const formProps = useForm<TUseForm>({
    name: 'create-theme-form',
    schema,
    onSubmit: data => {
      if (!data) return
      setLoading(true)
      void themeServices
        .create(data)
        .then(() =>
          queryClient.invalidateQueries({
            queryKey: ['themes'],
          })
        )
        .then(() => {
          navigate(-1)
        })
        .finally(() => setLoading(false))
    },
  })

  return (
    <ThemeForm
      title={t('theme.titles.newTheme')}
      buttonSubmitText={t('theme.form.create')}
      formProps={formProps}
      isLoading={isLoading}
    />
  )
}

export default CreateThemePage
