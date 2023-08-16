import { useTranslation } from 'react-i18next'

import coin from 'public/assets/images/coin.gif'
import { Image } from '@/widgets/Arcade/ui/Image'
import { PageTitle } from '@/shared/ui/PageTitle'

import styles from './styles.module.pcss'

import type { TScore } from './types'
import type { FC } from 'react'

export const Score: FC<TScore> = ({ score }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.score}>
      <PageTitle>
        {t('arcade.score')} : {score}
      </PageTitle>
      <Image alt="coin" src={coin} />
    </div>
  )
}
