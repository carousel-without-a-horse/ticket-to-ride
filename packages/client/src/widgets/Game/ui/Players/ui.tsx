import { Player } from '@/shared/ui/Game/Player'
import { useStore } from '@/shared/store'

import styles from './styles.module.pcss'

export const Players = () => {
  const {
    gameStore: {
      players: { currentPlayer, opponentPlayer },
    },
  } = useStore()

  return (
    <div className={styles.wrapper}>
      {currentPlayer && <Player player={currentPlayer} />}

      {opponentPlayer && <Player player={opponentPlayer} />}
    </div>
  )
}
