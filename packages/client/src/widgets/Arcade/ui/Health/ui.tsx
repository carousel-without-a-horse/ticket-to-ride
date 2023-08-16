import { Image } from '@/widgets/Arcade/ui/Image'
import Heart from 'public/assets/images/heart.png'

import styles from './styles.module.pcss'

import type { THealth } from './types'
import type { FC } from 'react'

export const Health: FC<THealth> = ({ health }) => {
  return (
    <div className={styles.health}>
      {Array(health)
        .fill(undefined)
        .map((_, i) => (
          <Image key={i} alt="Heart" size="small" src={Heart} />
        ))}
    </div>
  )
}
