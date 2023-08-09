import { t } from 'i18next'

import type { TTableColumnsType } from '@/shared/ui/Table'
import type { TDataRow } from '../types'

export const getColumnsDefault: () => TTableColumnsType<TDataRow> = () => [
  {
    title: '',
    dataIndex: 'num',
    key: 'num',
    width: 60,
  },
  {
    title: t('rating.user'),
    dataIndex: 'user',
    ellipsis: true,
    key: 'user',
  },
  {
    title: t('rating.scores'),
    dataIndex: 'scores',
    key: 'scores',
    ellipsis: true,
  },
]
