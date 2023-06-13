import { useCallback, useEffect, useMemo, useState } from 'react'
import type { FC, Key } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PlusCircleOutlined } from '@ant-design/icons'
import type { TTableColumnsType } from '@/shared/ui/Table'
import { Button } from '@/shared/ui/Button'
import { Space } from '@/shared/ui/Space'
import { useTranslateOutside } from '@/shared/hooks'
import { themeServices } from '@/entities/theme'
import { QueryTable } from '@/features/QueryTable'
import type { TTheme } from '@/entities/theme'
import { ROUTES } from '@/app/router/config'
import { OperationsWithSelected } from './ui/OperationsWithSelected'
import { getColumnsDefault, columnActions } from './utils'
import type { TThemes } from './types'

const iconPlus = <PlusCircleOutlined rev={undefined} />
const style = {
  wrapper: { width: '100%', justifyContent: 'end', marginBottom: 15 },
  table: { width: '700px' },
}

export const Themes: FC<TThemes> = ({ type }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [isMyThemes, setIsMyThemes] = useState(false)
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const columnsDefault = useTranslateOutside(getColumnsDefault)

  useEffect(() => {
    setIsMyThemes(type === 'my')
  }, [type])

  const rowSelection = useMemo(() => {
    if (!isMyThemes) return
    return {
      type: 'checkbox' as const,
      onChange: (selectedRowKeys: Key[], data: TTheme[]) => {
        setSelectedItems(data.map(item => item.id))
      },
    }
  }, [isMyThemes])

  const handleAddTheme = useCallback(() => {
    navigate(ROUTES.themeNew)
  }, [navigate])

  const columns = useMemo<TTableColumnsType<TTheme>>(() => {
    return isMyThemes ? [...columnsDefault, columnActions] : columnsDefault
  }, [columnsDefault, isMyThemes])

  return (
    <>
      <Space style={style.wrapper}>
        {isMyThemes && selectedItems.length > 0 && (
          <OperationsWithSelected selectedItems={selectedItems} />
        )}
        <Button type="primary" icon={iconPlus} onClick={handleAddTheme}>
          {t('forum.addTheme')}
        </Button>
      </Space>
      <QueryTable
        rowSelection={rowSelection}
        queryKey={['themes']}
        queryFn={themeServices.getAll}
        columns={columns}
        style={style.table}
      />
    </>
  )
}
