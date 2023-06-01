import type { CSSProperties } from 'react'
import { Card } from '@/shared/ui/Card'
import type { TTabsItems } from '@/shared/ui/Tabs'
import { Tabs } from '@/shared/ui/Tabs'
import { Themes } from './ui/Themes'
import { THEME_TYPES } from './lib/constants'

const style: CSSProperties = {
  marginBottom: 40,
}

const tabsItem: TTabsItems = [
  {
    key: THEME_TYPES.all,
    label: 'Все темы',
    children: <Themes type={THEME_TYPES.all} />,
  },
  {
    key: THEME_TYPES.my,
    label: 'Мои темы',
    children: <Themes type={THEME_TYPES.my} />,
  },
]

const ForumPage = () => {
  return (
    <Card title="Форум" style={style}>
      <Tabs
        items={tabsItem}
        defaultActiveKey={THEME_TYPES.all}
        withQueryParams
      />
    </Card>
  )
}

export default ForumPage
