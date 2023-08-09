import { observer } from 'mobx-react-lite'

import { SmallCard } from '@/shared/ui/Game/SmallCard'
import { useStore } from '@/shared/store'

import styles from './styles.module.pcss'

export const Hand = observer(() => {
  const {
    gameStore: {
      players: { currentPlayer },
    },
  } = useStore()
  console.log('currentPlayer:', currentPlayer)
  return (
    <div className={styles.wrapper}>
      {currentPlayer &&
        Object.values(currentPlayer.colorCards).map(card => (
          <SmallCard card={card} key={card.card.type} />
        ))}
    </div>
  )
})
