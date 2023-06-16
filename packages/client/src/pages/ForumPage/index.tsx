import { t } from 'i18next'
import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/Card'
import type { TTabsItems } from '@/shared/ui/Tabs'
import { Tabs } from '@/shared/ui/Tabs'
import { useTranslationRefresh } from '@/shared/hooks'

import { Themes } from './ui/Themes'
import { THEME_TYPES } from './lib/constants'

const style: CSSProperties = {
  marginBottom: 40,
}

const getTabsItem: () => TTabsItems = () => [
  {
    key: THEME_TYPES.all,
    label: t('forum.themes.all'),
    children: <Themes type={THEME_TYPES.all} />,
  },
  {
    key: THEME_TYPES.my,
    label: t('forum.themes.my'),
    children: <Themes type={THEME_TYPES.my} />,
  },
]

const ForumPage = () => {
  const { t } = useTranslation()
  const tabsItem = useTranslationRefresh(getTabsItem)

  return (
    <Card title={t('pages.forum')} style={style}>
      <Tabs
        items={tabsItem}
        defaultActiveKey={THEME_TYPES.all}
        withQueryParams
      />
    </Card>
  )
}

export default ForumPage
