import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PlusCircleOutlined } from '@ant-design/icons'

import { OperationsWithSelected } from './ui/OperationsWithSelected'
import { columnsDefault, columnActions } from './utils/columns'
import { dataSource } from './data'

import { Table } from '@/shared/ui/Table'
import { Button } from '@/shared/ui/Button'
import { Space } from '@/shared/ui/Space'
import { ROUTES } from '@/app/router/config'

import type { TThemes, TDataType } from './types'
import type { TTableColumnsType } from '@/shared/ui/Table'
import type { FC, Key } from 'react'

const iconPlus = <PlusCircleOutlined rev={undefined} />
const style = {
  wrapper: { width: '100%', justifyContent: 'end', marginBottom: 15 },
  table: { width: '700px' },
}

export const Themes: FC<TThemes> = ({ type }) => {
  const navigate = useNavigate()
  const [isMyThemes, setIsMyThemes] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string[]>([])

  useEffect(() => {
    setIsMyThemes(type === 'my')
  }, [type])

  const rowSelection = useMemo(() => {
    if (!isMyThemes) return
    return {
      type: 'checkbox' as const,
      onChange: (selectedRowKeys: Key[], data: TDataType[]) => {
        setSelectedItem(data.map(item => item.id))
      },
      getCheckboxProps: (record: TDataType) => ({
        id: record.id,
      }),
    }
  }, [isMyThemes])

  const handleAddTheme = useCallback(() => {
    navigate(ROUTES.themeNew)
  }, [navigate])

  const columns = useMemo<TTableColumnsType<TDataType>>(() => {
    return isMyThemes ? [...columnsDefault, columnActions] : columnsDefault
  }, [isMyThemes])

  return (
    <>
      <Space style={style.wrapper}>
        {isMyThemes && selectedItem.length > 0 && (
          <OperationsWithSelected selectedItems={selectedItem} />
        )}
        <Button type="primary" icon={iconPlus} onClick={handleAddTheme}>
          Добавить тему
        </Button>
      </Space>
      <Table
        rowSelection={rowSelection}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        style={style.table}
      />
    </>
  )
}
