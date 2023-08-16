import styles from './styles.module.pcss'

import type { PropsWithChildren } from 'react'

export const ScreenTransition = ({ children }: PropsWithChildren) => {
  return <div className={styles.screenTransition}>{children}</div>
}
