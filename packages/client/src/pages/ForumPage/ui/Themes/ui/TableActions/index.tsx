import { useNavigate } from 'react-router-dom'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

import { ROUTES } from '@/app/router/config'
import { Button } from '@/shared/ui/Button'
import { Popconfirm } from '@/shared/ui/Popconfirm'
import { Space } from '@/shared/ui/Space'
import { generateUrl } from '@/shared/utils/generateUrl'
import { themeServices } from '@/entities/theme'

import type { TTheme } from '@/entities/theme'

const iconEdit = <EditOutlined rev={undefined} />
const iconDelete = <DeleteOutlined rev={undefined} />

export const TableActions = ({ id }: { id: TTheme['id'] }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [isLoading, setLoading] = useState(false)
  const handleEdit = () => {
    const url = generateUrl(ROUTES.themeEdit, { id: id.toString() })
    navigate(url)
  }

  const handleConfirm = () => {
    setLoading(true)
    themeServices
      .delete({ id })
      .then(() =>
        queryClient.invalidateQueries({
          queryKey: ['themes'],
        })
      )
      .finally(() => setLoading(false))
  }

  return (
    <Space size="middle">
      <Button
        type="text"
        icon={iconEdit}
        title={t('table.actions.edit') || 'Edit'}
        onClick={handleEdit}
      />
      <Popconfirm
        title={t('theme.actions.deleteConfirm.title')}
        description={t('theme.actions.deleteConfirm.description')}
        onConfirm={handleConfirm}
        okText={t('table.actions.confirm.yes')}
        cancelText={t('table.actions.confirm.no')}
      >
        <Button
          type="text"
          icon={iconDelete}
          loading={isLoading}
          title={t('table.actions.delete') || 'Delete'}
        />
      </Popconfirm>
    </Space>
  )
}
