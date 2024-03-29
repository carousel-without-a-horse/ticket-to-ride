import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PlusCircleOutlined } from '@ant-design/icons'

import { Button } from '@/shared/ui/Button'
import { Space } from '@/shared/ui/Space'
import { useTranslationRefresh } from '@/shared/hooks'
import { themeServices } from '@/entities/theme'
import { QueryTable } from '@/features/QueryTable'
import { ROUTES } from '@/app/router/config'

import { OperationsWithSelected } from './ui/OperationsWithSelected'
import { getColumnsDefault, columnActions } from './utils'

import styles from './styles.module.pcss'

import type { TTheme } from '@/entities/theme'
import type { TTableColumnsType } from '@/shared/ui/Table'
import type { FC, Key } from 'react'
import type { TThemes } from './types'

const iconPlus = <PlusCircleOutlined rev={undefined} />

export const Themes: FC<TThemes> = ({ type }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [selectedItems, setSelectedItems] = useState<TId[]>([])
  const columnsDefault = useTranslationRefresh(getColumnsDefault)
  const isMyThemes = type === 'my'

  const rowSelection = useMemo(() => {
    if (!isMyThemes) return
    return {
      type: 'checkbox' as const,
      onChange: (selectedRowKeys: Key[], data: TTheme[]) => {
        setSelectedItems(data.map(item => item.id))
      },
    }
  }, [isMyThemes])

  const queryKey = useMemo(() => ['themes', type], [type])
  const meta = useMemo(() => ({ isMy: isMyThemes }), [isMyThemes])

  const handleAddTheme = useCallback(() => {
    navigate(ROUTES.themeNew)
  }, [navigate])

  const columns = useMemo<TTableColumnsType<TTheme>>(() => {
    return isMyThemes ? [...columnsDefault, columnActions] : columnsDefault
  }, [columnsDefault, isMyThemes])

  return (
    <>
      <Space className={styles.actions}>
        {isMyThemes && selectedItems.length > 0 && (
          <OperationsWithSelected selectedItems={selectedItems} />
        )}
        <Button type="primary" icon={iconPlus} onClick={handleAddTheme}>
          {t('forum.addTheme')}
        </Button>
      </Space>
      <QueryTable
        rowSelection={rowSelection}
        queryKey={queryKey}
        queryFn={themeServices.getAll}
        meta={meta}
        columns={columns}
        className={styles.table}
      />
    </>
  )
}
