import type { CSSProperties } from 'react'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EditOutlined } from '@ant-design/icons'
import { Card } from '@/shared/ui/Card'
import { Tags } from '@/shared/ui/Tags'
import { Space } from '@/shared/ui/Space'
import { Button } from '@/shared/ui/Button'
import { Likes } from '@/shared/ui/Likes'
import { Divider } from '@/shared/ui/Divider'
import { ROUTES } from '@/app/router/config'
import { generateUrl } from '@/shared/utils/generateUrl'
import { Comments } from '@/widgets/Comments'
import { data } from '../../data'

const iconEdit = <EditOutlined rev={undefined} />
const styleActions: CSSProperties = { width: '100%', justifyContent: 'end' }

const DetailThemePage = () => {
  const [vote, setVote] = useState<boolean | undefined>(false)
  const navigate = useNavigate()

  const handleEdit = useCallback(() => {
    const url = generateUrl(ROUTES.themeEdit, { id: data.id })
    navigate(url)
  }, [navigate])

  const handleLikeToggle = useCallback((vote?: boolean) => {
    setVote(vote)
  }, [])

  return (
    <Card title={data.name}>
      <p>Автор: {data.author.name}</p>
      <Tags value={data.tags} disabled />
      <p>{data.content}</p>
      <Space size="large" style={styleActions}>
        <Likes vote={vote} onChange={handleLikeToggle} />
        <Button icon={iconEdit} onClick={handleEdit}>
          Редактировать
        </Button>
      </Space>
      <Divider />
      <Comments id={data.id} />
    </Card>
  )
}

export default DetailThemePage
