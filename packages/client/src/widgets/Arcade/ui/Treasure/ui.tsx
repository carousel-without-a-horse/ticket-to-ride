import treasure from 'public/assets/images/treasure.png'

import { Image } from '../Image'
import { coordsToPosition } from '../../utils/coordsToPosition'
import { TREASURE_COORDS } from '../../utils/settings'

import styles from './styles.module.pcss'

import type { FC } from 'react'

export const Treasure: FC = () => {
  const [left, top] = coordsToPosition(TREASURE_COORDS)

  return (
    <div className={styles.treasure} style={{ top, left }}>
      <Image src={treasure} alt="treasure" />
    </div>
  )
}
