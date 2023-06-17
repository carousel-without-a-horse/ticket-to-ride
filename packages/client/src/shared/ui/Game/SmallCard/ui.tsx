import { colors } from '@/app/providers/colors'
import { colorCards } from '@/entities/Game/data/colorCards'
import { IconRainbow } from '@/shared/images/game'

import type { IProps } from './types'
import type { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
  wrapper: {
    width: 60,
    height: 30,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  countWrapper: {
    position: 'absolute',
  },
  count: {
    color: colors.game.white,
    fontSize: 16,
    fontWeight: 600,
  },
  image: {
    width: 24,
    height: 24,
  },
}

export const SmallCard = ({ card }: IProps) => {
  return (
    <div
      style={{
        ...styles.wrapper,
        backgroundColor: colorCards[card.type].color,
      }}
      className="box_shadow"
    >
      {card.type === 'rainbow' && (
        <img src={IconRainbow} style={styles.image} />
      )}

      <div style={styles.countWrapper}>
        <span style={styles.count} className="text_shadow">
          {card.count}
        </span>
      </div>
    </div>
  )
}
