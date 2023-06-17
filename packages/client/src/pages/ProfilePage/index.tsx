import { withAuth } from '@/shared/hocs'
import { Card } from '@/shared/ui/Card'
import { ProfileForm } from '@/pages/ProfilePage/ui/ProfileForm'
import { Tabs } from '@/shared/ui/Tabs'
import { PasswordForm } from '@/pages/ProfilePage/ui/PasswordForm'

import { PROFILE_TYPES } from './lib/constants'

import type { TTabsItems } from '@/shared/ui/Tabs'

const tabsItem: TTabsItems = [
  {
    key: PROFILE_TYPES.changeProfile,
    label: 'Профиль',
    children: <ProfileForm />,
  },
  {
    key: PROFILE_TYPES.changePassword,
    label: 'Изменить пароль',
    children: <PasswordForm />,
  },
]

const ProfilePage = withAuth(() => {
  return (
    <Card title="Профиль">
      <Tabs
        items={tabsItem}
        defaultActiveKey={PROFILE_TYPES.changeProfile}
        withQueryParams
      />
    </Card>
  )
})

export default ProfilePage
