import { useMemo } from 'react'
import type { FC } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Button } from '@/shared/ui/Button'
import type { TDropdownProps } from '@/shared/ui/Dropdown'
import { Dropdown } from '@/shared/ui/Dropdown'
export type { TOperationsWithSelected } from './types'

const iconDown = <DownOutlined rev={undefined} />

export const OperationsWithSelected: FC<TOperationsWithSelected> = ({
  selectedItems,
}) => {
  const menu = useMemo<TDropdownProps['menu']>(
    () => ({
      items: [
        {
          label: 'Открыть',
          key: '0',
          onClick: () => {
            console.log(selectedItems)
          },
        },
        {
          label: 'Перевести в черновик',
          key: '1',
        },
        {
          label: 'Удалить',
          key: '3',
        },
      ],
    }),
    [selectedItems]
  )
  return (
    <Dropdown menu={menu}>
      <Button type="text" icon={iconDown}>
        Операции с выделенным
      </Button>
    </Dropdown>
  )
}
