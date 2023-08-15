import { useTranslation } from 'react-i18next'

import GameComplete from 'public/assets/images/treasure.png'
import { Button } from '@/shared/ui/Button'
import { PageTitle } from '@/shared/ui/PageTitle'

import { MenuScreen } from '../MenuScreen'
import { Image } from '../Image'

import type { FC } from 'react'
import type { TSuccessScreen } from './types'

export const SuccessScreen: FC<TSuccessScreen> = ({ onResetButtonClicked }) => {
  const { t } = useTranslation()
  return (
    <MenuScreen>
      <PageTitle>{t('arcade.successScreen.title')}</PageTitle>
      <Image alt="Game complete" size="large" src={GameComplete} />
      <Button onClick={onResetButtonClicked}>
        {t('arcade.successScreen.resetButton')}
      </Button>
    </MenuScreen>
  )
}
