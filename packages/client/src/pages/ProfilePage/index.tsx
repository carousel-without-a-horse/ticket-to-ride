import { t } from 'i18next'
import { useTranslation } from 'react-i18next'

import { Card } from '@/shared/ui/Card'
import { ProfileForm } from '@/pages/ProfilePage/ui/ProfileForm'
import { Tabs } from '@/shared/ui/Tabs'
import { PasswordForm } from '@/pages/ProfilePage/ui/PasswordForm'
import { useTranslationRefresh } from '@/shared/hooks'

import { PROFILE_TYPES } from './lib/constants'

import type { TTabsItems } from '@/shared/ui/Tabs'

const getColumnsDefault: () => TTabsItems = () => [
  {
    key: PROFILE_TYPES.changeProfile,
    label: t('profile.profileTitle'),
    children: <ProfileForm />,
  },
  {
    key: PROFILE_TYPES.changePassword,
    label: t('profile.passwordTitle'),
    children: <PasswordForm />,
  },
]

const ProfilePage = () => {
  const tabsItem = useTranslationRefresh(getColumnsDefault)
  const { t } = useTranslation()

  return (
    <Card title={t('profile.profileTitle')}>
      <Tabs
        items={tabsItem}
        defaultActiveKey={PROFILE_TYPES.changeProfile}
        withQueryParams
      />
    </Card>
  )
}

export default ProfilePage
