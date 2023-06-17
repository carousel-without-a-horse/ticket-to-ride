import { colorCards } from '@/entities/Game/data/colorCards'
import { IconRainbow } from '@/shared/images/game'

import styles from './styles.module.pcss'

import type { IProps } from './types'

export const SmallCard = ({ card }: IProps) => {
  return (
    <div
      style={{
        backgroundColor: colorCards[card.type].color,
      }}
      className={styles.wrapper}
    >
      {card.type === 'rainbow' && <img src={IconRainbow} />}

      <div className={styles.countWrapper}>
        <span>{card.count}</span>
      </div>
    </div>
  )
}
