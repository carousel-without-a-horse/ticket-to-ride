import { IconRainbow } from '@/shared/images/game'

import styles from './styles.module.pcss'

import type { IProps } from './types'

export const SmallCard = ({ card }: IProps) => {
  return (
    <div
      style={{
        backgroundColor: card.card.color,
      }}
      className={styles.wrapper}
    >
      {card.card.type === 'rainbow' && (
        <img
          src={IconRainbow}
          alt="Радуга"
          width={24}
          height={24}
          loading="lazy"
        />
      )}

      <div className={styles.countWrapper}>
        <span>{card.count}</span>
      </div>
    </div>
  )
}
