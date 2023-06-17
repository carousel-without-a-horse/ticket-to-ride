import { observer } from 'mobx-react-lite'
import { theme } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { t } from 'i18next'

import { LOCAL_STORAGE_KEYS } from '@/shared/constants/localStorage'
import { Header as LayoutHeader } from '@/shared/ui/Layout'
import { Space } from '@/shared/ui/Space'
import { Menu } from '@/shared/ui/Menu'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSelect } from '@/features/LangSelect'
import { ROUTES } from '@/app/router/config'
import { useTranslationRefresh } from '@/shared/hooks'
import { useStore } from '@/shared/store'

import type { TMenuSelectEventHandler } from '@/shared/ui/Menu'

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
  {
    key: ROUTES.profile,
    label: t('pages.profile'),
  },
]
export const Header = observer(() => {
  const { userStore } = useStore()
  const { token } = theme.useToken()
  const navigate = useNavigate()
  const location = useLocation()
  const privateItems = useTranslationRefresh(() =>
    getItems().filter(
      ({ key }) => key !== ROUTES.signUp && key !== ROUTES.signIn
    )
  )
  const notPrivateItems = useTranslationRefresh(() =>
    getItems().filter(
      ({ key }) => key === ROUTES.signUp || key === ROUTES.signIn
    )
  )
  const localStorageUserLogin = localStorage.getItem(
    LOCAL_STORAGE_KEYS.userLogin
  )
  const [menuItems, setMenuItems] = useState(
    localStorageUserLogin ? privateItems : notPrivateItems
  )

  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(
    location.pathname
  )

  useEffect(() => {
    setSelectedMenuItem(location.pathname)
  }, [location])

  useEffect(() => {
    const items = localStorageUserLogin ? privateItems : notPrivateItems
    setMenuItems(items)
  }, [
    localStorageUserLogin,
    privateItems,
    notPrivateItems,
    userStore.userLogin,
  ])

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
})
