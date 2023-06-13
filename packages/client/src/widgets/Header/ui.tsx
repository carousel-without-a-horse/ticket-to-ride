import type { TMenuSelectEventHandler } from '@/shared/ui/Menu'
import { Header as LayoutHeader } from '@/shared/ui/Layout'
import { Space } from '@/shared/ui/Space'
import { Menu } from '@/shared/ui/Menu'

import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSelect } from '@/features/LangSelect'

import { theme } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '@/app/router/config'
import { useEffect, useState } from 'react'
import { t } from 'i18next'
import { useTranslateOutside } from '@/shared/hooks'

const getItems = () => [
  {
    key: ROUTES.root,
    label: t('pages.guide'),
  },
  {
    key: ROUTES.about,
    label: t('pages.about'),
  },
  {
    key: ROUTES.rating,
    label: t('pages.rating'),
  },
  {
    key: ROUTES.forum,
    label: t('pages.forum'),
  },
  {
    key: ROUTES.signIn,
    label: t('pages.login'),
  },
  {
    key: ROUTES.signUp,
    label: t('pages.signup'),
  },
]
export const Header = () => {
  const { token } = theme.useToken()
  const navigate = useNavigate()
  const location = useLocation()
  const menuItems = useTranslateOutside(getItems)

  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(
    location.pathname
  )

  useEffect(() => {
    setSelectedMenuItem(location.pathname)
  }, [location])
  const handleSelect: TMenuSelectEventHandler = ({ key }) => {
    navigate(key)
  }

  return (
    <LayoutHeader
      style={{
        background: token.colorBgContainer,
        marginBottom: 50,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div>Logo</div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Menu
          mode="horizontal"
          selectedKeys={[selectedMenuItem]}
          items={menuItems}
          style={{ flexGrow: 1, justifyContent: 'flex-end', borderBottom: 0 }}
          onSelect={handleSelect}
        />
        <Space>
          <ThemeSwitcher />
          <LangSelect />
        </Space>
      </div>
    </LayoutHeader>
  )
}
