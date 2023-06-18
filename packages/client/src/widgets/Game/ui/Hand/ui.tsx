import { SmallCard } from '@/shared/ui/Game/SmallCard'

import styles from './styles.module.pcss'

import type { IHandCard } from './types'

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
    <div className={styles.wrapper}>
      {handCards.map(card => (
        <SmallCard card={card} />
      ))}
    </div>
  )
}
