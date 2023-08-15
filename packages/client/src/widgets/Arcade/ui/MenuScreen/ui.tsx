import styles from './styles.module.pcss'

import type { PropsWithChildren } from 'react'
export const MenuScreen = ({ children }: PropsWithChildren) => {
  return <section className={styles.menuScreen}>{children}</section>
}
