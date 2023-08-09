import { Col } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { uniqueId } from 'lodash'

import { Button } from '@/shared/ui/Game/Button'
import { Card } from '@/shared/ui/Game/Card'
import { useStore } from '@/shared/store'

import styles from './styles.module.pcss'

export const Draft = observer(() => {
  const { gameStore } = useStore()
  const {
    draft: { open: openCards },
  } = gameStore

  const [selectedCardsIndexes, setSelectedCardsIndexes] = useState<number[]>([])

  const isOpenCardsSelected = selectedCardsIndexes.length !== 0

  const takeCards = () => {
    if (isOpenCardsSelected) {
      gameStore.takeOpenCard(selectedCardsIndexes)
      setSelectedCardsIndexes([])
    } else {
      gameStore.takeHiddenCard()
    }
  }

  const renderOpenCards = () => (
    <div className={styles.cards}>
      {openCards.map((card, cardIndex) => (
        <Card
          key={uniqueId()}
          card={card}
          selectedCardsIndexes={selectedCardsIndexes}
          setSelectedCardsIndexes={setSelectedCardsIndexes}
          cardIndex={cardIndex}
        />
      ))}
    </div>
  )

  const renderButtons = () => (
    <div className={styles.buttons}>
      <Button onClick={takeCards}>
        {isOpenCardsSelected
          ? 'Взять карту цвета'
          : 'Взять карту цвета вслепую'}
      </Button>

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
})
