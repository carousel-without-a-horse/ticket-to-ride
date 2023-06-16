import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { themeServices } from '@/entities/theme'
import { ROUTES } from '@/app/router/config'
import { SkeletonThemeForm } from '@/pages/ThemePage/ui/SkeletonThemeForm'

import ThemeForm from '../../ui/ThemeForm'

const EditThemePage = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!id) {
      navigate(ROUTES.forum)
    }
  }, [id, navigate])

  const { data, isLoading } = useQuery({
    queryKey: ['theme', id],
    queryFn: () => themeServices.getItem({ id: id!.toString() }),
  })

  if (isLoading) {
    return <SkeletonThemeForm />
  }

  return (
    <ThemeForm
      title={t('theme.titles.editTheme')}
      initialValues={data}
      onSubmit={data => {
        console.log(data)
      }}
    />
  )
}

export default EditThemePage
