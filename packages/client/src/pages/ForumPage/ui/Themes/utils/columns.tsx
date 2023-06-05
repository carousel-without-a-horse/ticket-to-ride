import { Link } from 'react-router-dom'
import type { TTableColumnsType, TTableColumnType } from '@/shared/ui/Table'
import { generateUrl } from '@/shared/utils/generateUrl'
import { ROUTES } from '@/app/router/config'
import { TableActions } from '../ui/TableActions'
import type { TDataType } from '../types'

export const columnsDefault: TTableColumnsType<TDataType> = [
  {
    title: 'Тема',
    dataIndex: 'theme',
    render: (_, record) => {
      const url = generateUrl(ROUTES.themeDetail, { id: record.id })
      return <Link to={url}>{record.theme}</Link>
    },
  },
  {
    title: 'Автор',
    dataIndex: 'author',
  },
  {
    title: 'Ответы',
    dataIndex: 'commentsCount',
  },
]

export const columnActions: TTableColumnType<TDataType> = {
  title: '',
  dataIndex: 'actions',
  render: (_, record) => <TableActions id={record.id} />,
}
