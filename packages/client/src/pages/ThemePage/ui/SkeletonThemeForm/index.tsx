import { Card } from '@/shared/ui/Card'
import { Skeleton } from 'antd'

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
