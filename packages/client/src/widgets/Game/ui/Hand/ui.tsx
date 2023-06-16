import { SmallCard } from '@/shared/ui/Game/SmallCard'

import type { IHandCard } from './types'
import type { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
  wrapper: {
    width: 220,
    padding: 10,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'baseline',
    gap: 10,
  },
}

// TODO: заменить на динамические данные
const handCards: IHandCard[] = [
  {
    type: 'black',
    count: 5,
  },
  {
    type: 'white',
    count: 8,
  },
  {
    type: 'green',
    count: 8,
  },
  {
    type: 'purple',
    count: 8,
  },
  {
    type: 'rainbow',
    count: 8,
  },
]

export const Hand = () => {
  return (
    <div style={styles.wrapper}>
      {handCards.map(card => (
        <SmallCard card={card} />
      ))}
    </div>
  )
}
