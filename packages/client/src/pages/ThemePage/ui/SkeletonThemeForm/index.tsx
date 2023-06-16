import { Skeleton } from 'antd'

import { Card } from '@/shared/ui/Card'

const style = {
  width: 1000,
}
export const SkeletonThemeForm = () => {
  return (
    <Card title={<Skeleton active paragraph={false} />} style={style}>
      <Skeleton active />
    </Card>
  )
}
