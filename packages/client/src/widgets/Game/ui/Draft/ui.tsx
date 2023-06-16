import { Col } from 'antd'

import { Button } from '@/shared/ui/Game/Button'
import { Card } from '@/shared/ui/Game/Card'

import type { CSSProperties } from 'react'
import type { colorCards } from '@/widgets/Game/data/colorCards'

const styles: Record<string, CSSProperties> = {
  wrapper: {
    width: 160,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cards: {
    width: 130,
    height: 390,
    marginTop: 36,
    marginBottom: 36,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    height: 230,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    <div style={styles.cards}>
      {draftCards.map(card => (
        <Card type={card} />
      ))}
    </div>
  )

  const renderButtons = () => (
    <div style={styles.buttons}>
      <Button>Взять карту цвета</Button>

      <Button>Взять карту маршрута</Button>

      <Button>Стоимость маршрутов</Button>
    </div>
  )

  return (
    <Col style={styles.wrapper}>
      {renderOpenCards()}

      {renderButtons()}
    </Col>
  )
}
