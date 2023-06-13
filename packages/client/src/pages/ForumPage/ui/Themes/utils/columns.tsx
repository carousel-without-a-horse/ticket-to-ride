import { t } from 'i18next'
import { Link } from 'react-router-dom'
import type { TTableColumnsType, TTableColumnType } from '@/shared/ui/Table'
import { generateUrl } from '@/shared/utils/generateUrl'
import { ROUTES } from '@/app/router/config'
import type { TTheme } from '@/entities/theme'
import { TableActions } from '../ui/TableActions'

export const getColumnsDefault: () => TTableColumnsType<TTheme> = () => [
  {
    title: t('forum.table.header.name'),
    dataIndex: 'name',
    render: (_, record) => {
      const url = generateUrl(ROUTES.themeDetail, { id: record.id })
      return <Link to={url}>{record.name}</Link>
    },
  },
  {
    title: t('forum.table.header.author'),
    dataIndex: 'author',
  },
  {
    title: t('forum.table.header.commentsCount'),
    dataIndex: 'commentsCount',
  },
]

export const columnActions: TTableColumnType<TTheme> = {
  title: '',
  dataIndex: 'actions',
  render: (_, record) => <TableActions id={record.id} />,
}
