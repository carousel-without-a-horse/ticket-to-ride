import { useTranslation } from 'react-i18next'

import gameOver from 'public/assets/images/skull.png'
import { Button } from '@/shared/ui/Button'
import { PageTitle } from '@/shared/ui/PageTitle'

import { MenuScreen } from '../MenuScreen'
import { Image } from '../Image'

import type { FC } from 'react'
import type { TGameOverScreen } from './types'

export const GameOverScreen: FC<TGameOverScreen> = ({
  onRestartButtonClicked,
}) => {
  const { t } = useTranslation()
  return (
    <MenuScreen>
      <PageTitle>{t('arcade.gameOverScreen.title')}</PageTitle>
      <Image alt="gameOver" size="large" src={gameOver} />
      <Button onClick={onRestartButtonClicked}>
        {t('arcade.gameOverScreen.resetButton')}
      </Button>
    </MenuScreen>
  )
}
