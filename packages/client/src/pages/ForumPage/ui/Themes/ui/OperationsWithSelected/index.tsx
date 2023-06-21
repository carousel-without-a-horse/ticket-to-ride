import { useMemo } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/Button'
import { Dropdown } from '@/shared/ui/Dropdown'

import type { TDropdownProps } from '@/shared/ui/Dropdown'
import type { FC } from 'react'
import type { TOperationsWithSelected } from './types'

const iconDown = <DownOutlined rev={undefined} />

export const OperationsWithSelected: FC<TOperationsWithSelected> = ({
  selectedItems,
}) => {
  const { t } = useTranslation()
  const menu = useMemo<TDropdownProps['menu']>(
    () => ({
      items: [
        {
          label: t('forum.operationsWithSelected.options.open'),
          key: '0',
          onClick: () => {
            console.log(selectedItems)
          },
        },
        {
          label: t('forum.operationsWithSelected.options.convertToDraft'),
          key: '1',
        },
        {
          label: t('forum.operationsWithSelected.options.remove'),
          key: '3',
        },
      ],
    }),
    [selectedItems, t]
  )
  return (
    <Dropdown menu={menu}>
      <Button type="text" icon={iconDown}>
        {t('forum.operationsWithSelected.title')}
      </Button>
    </Dropdown>
  )
}
