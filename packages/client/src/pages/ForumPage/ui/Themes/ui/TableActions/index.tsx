import { useNavigate } from 'react-router-dom'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

import { ROUTES } from '@/app/router/config'
import { Button } from '@/shared/ui/Button'
import { Space } from '@/shared/ui/Space'
import { generateUrl } from '@/shared/utils/generateUrl'

import type { TTheme } from '@/entities/theme'

const iconEdit = <EditOutlined rev={undefined} />
const iconDelete = <DeleteOutlined rev={undefined} />

export const TableActions = ({ id }: { id: TTheme['id'] }) => {
  const navigate = useNavigate()
  const handleEdit = () => {
    const url = generateUrl(ROUTES.themeEdit, { id: id.toString() })
    navigate(url)
  }

  return (
    <Space size="middle">
      <Button
        type="text"
        icon={iconEdit}
        title="Редактировать"
        onClick={handleEdit}
      />
      <Button type="text" icon={iconDelete} title="Удалить" />
    </Space>
  )
}
