import { theme } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Header as LayoutHeader } from '@/shared/ui/Layout'
import { Menu } from '@/shared/ui/Menu'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { ROUTES } from '@/app/router/config'

import type { TMenuSelectEventHandler } from '@/shared/ui/Menu'

const items = [
  {
    key: ROUTES.root,
    label: 'Guide',
  },
  {
    key: ROUTES.about,
    label: 'Об игре',
  },
  {
    key: ROUTES.rating,
    label: 'Рейтинг игроков',
  },
  {
    key: ROUTES.forum,
    label: 'Форум',
  },
  {
    key: ROUTES.signIn,
    label: 'Войти',
  },
  {
    key: ROUTES.signUp,
    label: 'Регистрация',
  },
  {
    key: ROUTES.profile,
    label: 'Профиль',
  },
]
export const Header = () => {
  const { token } = theme.useToken()
  const navigate = useNavigate()
  const location = useLocation()
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
          items={items}
          style={{ flexGrow: 1, justifyContent: 'flex-end', borderBottom: 0 }}
          onSelect={handleSelect}
        />
        <ThemeSwitcher />
      </div>
    </LayoutHeader>
  )
}
