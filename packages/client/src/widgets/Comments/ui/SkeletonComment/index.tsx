import { Skeleton } from 'antd'

import styles from './styles.module.pcss'

export const SkeletonComment = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton avatar active />
    </div>
  )
}
