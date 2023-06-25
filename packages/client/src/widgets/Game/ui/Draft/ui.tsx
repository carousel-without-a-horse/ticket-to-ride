import { Col } from 'antd'

import { Button } from '@/shared/ui/Game/Button'
import { Card } from '@/shared/ui/Game/Card'

import styles from './styles.module.pcss'

import type { TColorCardKey } from '@/entities/Game/data/colorCards'

// TODO: заменить на динамические данные
const draftCards: TColorCardKey[] = [
  'blue',
  'orange',
  'red',
  'white',
  'rainbow',
]

export const Draft = () => {
  const renderOpenCards = () => (
    <div className={styles.cards}>
      {draftCards.map(card => (
        <Card type={card} />
      ))}
    </div>
  )

  const renderButtons = () => (
    <div className={styles.buttons}>
      <Button>Взять карту цвета</Button>

      <Button>Взять карту маршрута</Button>

      <Button>Стоимость маршрутов</Button>
    </div>
  )

  return (
    <Col className={styles.wrapper}>
      {renderOpenCards()}

      {renderButtons()}
    </Col>
  )
}
