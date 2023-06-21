import { theme } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { t } from 'i18next'

import { Header as LayoutHeader } from '@/shared/ui/Layout'
import { Space } from '@/shared/ui/Space'
import { Menu } from '@/shared/ui/Menu'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSelect } from '@/features/LangSelect'
import { ROUTES } from '@/app/router/config'
import { useTranslationRefresh } from '@/shared/hooks'

import styles from './styles.module.pcss'

import type { TMenuSelectEventHandler } from '@/shared/ui/Menu'

const getItems = () => [
  {
    key: ROUTES.startGame,
    label: 'Начать игру',
  },
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
export const Header = () => {
  const { token } = theme.useToken()
  const navigate = useNavigate()
  const location = useLocation()
  const menuItems = useTranslationRefresh(getItems)

  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(
    location.pathname
  )

  useEffect(() => {
    setSelectedMenuItem(location.pathname)
  }, [location])

  const style = useMemo(
    () => ({
      background: token.colorBgContainer,
    }),
    [token.colorBgContainer]
  )
  const handleSelect: TMenuSelectEventHandler = ({ key }) => {
    navigate(key)
  }

  const selectedKeys = useMemo(() => [selectedMenuItem], [selectedMenuItem])

  return (
    <LayoutHeader className={styles.header} style={style}>
      <div>Logo</div>
      <div className={styles.content}>
        <Menu
          mode="horizontal"
          selectedKeys={selectedKeys}
          items={menuItems}
          className={styles.menu}
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
