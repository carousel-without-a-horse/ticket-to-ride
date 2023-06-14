import { Card } from '@/shared/ui/Game/Card'
import { Col } from 'antd'

import type { CSSProperties } from 'react'
import type { colorCards } from '../../data/colorCards'

const styles: Record<string, CSSProperties> = {
  wrapper: { width: 160, backgroundColor: 'purple' },
}

const stylesСards: Record<string, CSSProperties> = {
  wrapper: {
    width: 130,
    height: 390,
    marginTop: 36,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}

// TODO: заменить на динамические данные
const draftCards: Array<keyof typeof colorCards> = [
  'blue',
  'orange',
  'red',
  'white',
  'rainbow',
]

export const Draft = () => {
  const renderOpenCards = () => (
    <div style={stylesСards.wrapper}>
      {draftCards.map(card => (
        <Card type={card} />
      ))}
    </div>
  )

  return <Col style={styles.wrapper}>{renderOpenCards()}</Col>
}
