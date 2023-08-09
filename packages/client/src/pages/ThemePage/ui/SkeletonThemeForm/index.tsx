import { Skeleton } from 'antd'

import { Card } from '@/shared/ui/Card'

import styles from './styles.module.pcss'

export const SkeletonThemeForm = () => {
  return (
    <Card
      title={<Skeleton active paragraph={false} />}
      className={styles.wrapper}
    >
      <Skeleton active />
    </Card>
  )
}
