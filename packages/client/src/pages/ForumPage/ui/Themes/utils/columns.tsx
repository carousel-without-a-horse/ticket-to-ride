import { t } from 'i18next'
import { Link } from 'react-router-dom'

import { generateUrl } from '@/shared/utils/generateUrl'
import { ROUTES } from '@/app/router/config'

import { TableActions } from '../ui/TableActions'

import type { TTheme } from '@/entities/theme'
import type { TTableColumnsType, TTableColumnType } from '@/shared/ui/Table'

export const getColumnsDefault: () => TTableColumnsType<TTheme> = () => [
  {
    title: t('forum.table.header.name'),
    dataIndex: 'title',
    render: (_, record) => {
      const url = generateUrl(ROUTES.themeDetail, { id: record.id.toString() })
      return <Link to={url}>{record.title}</Link>
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
