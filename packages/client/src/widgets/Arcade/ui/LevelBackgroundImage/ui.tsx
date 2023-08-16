import styles from './styles.module.pcss'

import type { TLevelBackgroundImage } from './types'
import type { FC } from 'react'

export const LevelBackgroundImage: FC<TLevelBackgroundImage> = props => {
  return <img alt="Level" className={styles.level} {...props} />
}
