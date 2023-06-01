import type { TabsProps } from 'antd'

export type TTabsProps = TabsProps & {
  withQueryParams?: boolean
}
export type TTabsItems = TabsProps['items']
export type TTabsOnChange = (activeKey: string) => void
