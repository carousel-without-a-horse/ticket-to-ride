import { Player } from '@/shared/ui/Game/Player'

import styles from './styles.module.pcss'

export const Players = () => {
  return (
    <div className={styles.wrapper}>
      <Player character="banana" />

      <Player character="grape" />
    </div>
  )
}
