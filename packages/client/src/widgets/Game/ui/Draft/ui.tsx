import { Col } from 'antd'

import type { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
  wrapper: { width: 160, backgroundColor: 'purple' },
}

export const Draft = () => {
  return (
    <Col style={styles.wrapper}>
      <div>Draft</div>
    </Col>
  )
}
