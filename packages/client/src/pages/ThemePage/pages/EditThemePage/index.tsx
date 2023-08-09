import { useTranslation } from 'react-i18next'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { themeServices } from '@/entities/theme'
import { ROUTES } from '@/app/router/config'
import { SkeletonThemeForm } from '@/pages/ThemePage/ui/SkeletonThemeForm'
import { useForm } from '@/shared/hooks'
import { generateUrl } from '@/shared/utils/generateUrl'

import ThemeForm from '../../ui/ThemeForm'

import schema from './schema'

import type { TUseForm } from './types'

const EditThemePage = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [isFormLoading, seFormLoading] = useState(false)

  useEffect(() => {
    if (!id) {
      navigate(ROUTES.forum)
    }
  }, [id, navigate])

  const { data, isLoading } = useQuery({
    queryKey: ['theme', id],
    queryFn: () => themeServices.getItem({ id: +id! }),
  })

  const formProps = useForm<TUseForm>({
    name: 'edit-theme-form',
    schema,
    onSubmit: data => {
      if (!data) return
      seFormLoading(true)
      void themeServices
        .update({ id: +id!, ...data })
        .then(() =>
          queryClient.resetQueries({
            queryKey: ['themes'],
          })
        )
        .then(() => {
          const url = generateUrl(ROUTES.themeDetail, { id: id! })
          navigate(url)
        })
        .finally(() => seFormLoading(false))
    },
  })

  if (isLoading) {
    return <SkeletonThemeForm />
  }

  return (
    <ThemeForm
      title={t('theme.titles.editTheme')}
      initialValues={data}
      isLoading={isFormLoading}
      formProps={formProps}
    />
  )
}

export default EditThemePage
