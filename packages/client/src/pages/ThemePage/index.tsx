import { useParams } from 'react-router'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { EditOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'

import { ROUTES } from '@/app/router/config'
import { withAuth } from '@/shared/hocs'
import { Card } from '@/shared/ui/Card'
import { Tags } from '@/shared/ui/Tags'
import { Space } from '@/shared/ui/Space'
import { Button } from '@/shared/ui/Button'
import { Likes } from '@/shared/ui/Likes'
import { Divider } from '@/shared/ui/Divider'
import { generateUrl } from '@/shared/utils/generateUrl'
import { Comments } from '@/widgets/Comments'
import { themeServices } from '@/entities/theme'

import { SkeletonThemeForm } from './ui/SkeletonThemeForm'

import type { CSSProperties } from 'react'

const iconEdit = <EditOutlined rev={undefined} />
const styleActions: CSSProperties = { width: '100%', justifyContent: 'end' }

const ThemePage = withAuth(() => {
  const { id } = useParams()
  const [vote, setVote] = useState<boolean | undefined>()
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    if (!id) {
      navigate(ROUTES.forum)
    }
  }, [id, navigate])

  const { data, isLoading } = useQuery({
    queryKey: ['theme', id],
    queryFn: () => themeServices.getItem({ id: id!.toString() }),
  })

  const handleEdit = useCallback(() => {
    if (!data?.id) return
    const url = generateUrl(ROUTES.themeEdit, { id: data.id })
    navigate(url)
  }, [data?.id, navigate])

  const handleLikeToggle = useCallback((vote?: boolean) => {
    setVote(vote)
  }, [])

  if (isLoading || !data) {
    return <SkeletonThemeForm />
  }

  return (
    <Card title={data.name}>
      <p>
        {t('theme.info.author')}: {data.author.name}
      </p>
      <Tags value={data.tags} disabled />
      <p>{data.content}</p>
      <Space size="large" style={styleActions}>
        <Likes vote={vote} onChange={handleLikeToggle} />
        <Button icon={iconEdit} onClick={handleEdit}>
          {t('theme.editTheme')}
        </Button>
      </Space>
      <Divider />
      <Comments id={data.id} />
    </Card>
  )
})

export default ThemePage
