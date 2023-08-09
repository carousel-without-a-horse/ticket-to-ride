import type { TColumns } from '../types'

export const columns: TColumns = [
  {
    title: '',
    dataIndex: 'num',
    key: 'num',
    width: 60,
  },
  {
    title: 'Пользователь',
    dataIndex: 'user',
    ellipsis: true,
    key: 'user',
  },
  {
    title: 'Баллы',
    dataIndex: 'scores',
    key: 'scores',
    ellipsis: true,
  },
]
