import { useTranslation } from 'react-i18next'

import player from 'public/assets/images/thief.gif'
import { Button } from '@/shared/ui/Button'
import { PageTitle } from '@/shared/ui/PageTitle'

import { MenuScreen } from '../MenuScreen'
import { Image } from '../Image'

import type { FC } from 'react'
import type { THomeScreen } from './types'

export const HomeScreen: FC<THomeScreen> = ({ onStartGameButtonClicked }) => {
  const { t } = useTranslation()
  return (
    <MenuScreen>
      <PageTitle>{t('arcade.homeScreen.title')}</PageTitle>
      <Image alt="player" size="large" src={player} />
      <Button onClick={onStartGameButtonClicked}>
        {t('arcade.homeScreen.startButton')}
      </Button>
    </MenuScreen>
  )
}
