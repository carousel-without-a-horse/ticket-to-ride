import DomPurify from 'dompurify'
import { useParams } from 'react-router'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { EditOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react-lite'

import { ROUTES } from '@/app/router/config'
import { Card } from '@/shared/ui/Card'
import { Tags } from '@/shared/ui/Tags'
import { Space } from '@/shared/ui/Space'
import { Button } from '@/shared/ui/Button'
import { Likes } from '@/features/Likes'
import { Divider } from '@/shared/ui/Divider'
import { generateUrl } from '@/shared/utils/generateUrl'
import { Comments } from '@/widgets/Comments'
import { themeServices } from '@/entities/theme'
import { useStore } from '@/shared/store'

import { SkeletonThemeForm } from './ui/SkeletonThemeForm'

import styles from './styles.module.pcss'

const iconEdit = <EditOutlined rev={undefined} />

const ThemePage = observer(() => {
  const { id } = useParams()
  const { userStore } = useStore()
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    if (!id) {
      navigate(ROUTES.forum)
    }
  }, [id, navigate])

  const { data, isLoading } = useQuery({
    queryKey: ['theme', id],
    queryFn: () => themeServices.getItem({ id: +id! }),
  })

  const handleEdit = useCallback(() => {
    if (!data?.id) return
    const url = generateUrl(ROUTES.themeEdit, { id: data.id.toString() })
    navigate(url)
  }, [data?.id, navigate])

  if (isLoading) {
    return <SkeletonThemeForm />
  }

  if (!data) {
    navigate(ROUTES.forum)
    return null
  }

  return (
    <Card className={styles.wrapper} title={data.title}>
      <p>
        {t('theme.info.author')}: {data.user.login}
      </p>
      <Tags value={data.tags} disabled />
      <p
        dangerouslySetInnerHTML={{ __html: DomPurify.sanitize(data.content) }}
      />
      <Space size="large" className={styles.actions}>
        <Likes type="topic" id={data.id} />
        {userStore.user?.id === data.user.id && (
          <Button icon={iconEdit} onClick={handleEdit}>
            {t('theme.editTheme')}
          </Button>
        )}
      </Space>
      <Divider />
      <Comments id={data.id} />
    </Card>
  )
})

export default ThemePage
