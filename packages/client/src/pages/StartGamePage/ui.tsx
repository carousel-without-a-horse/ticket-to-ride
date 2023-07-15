import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { t } from 'i18next'

import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/app/router/config'
import { useStore } from '@/shared/store'
import { Select } from '@/shared/ui/Select/Select'
import { Row } from '@/shared/ui/Row'
import { Col } from '@/shared/ui/Col'
import { Countdown } from '@/shared/ui/Countdown'
import {
  type TCharacterKey,
  charactersKeys,
} from '@/entities/Game/data/characters'
import { gameInProcess } from '@/shared/constants/gameStatus'

import { characterOptions } from './data'

import styles from './styles.module.pcss'

const modeOptions = [
  {
    label: t('startGame.modeOptions.againstTheComputer'),
    value: 'test',
  },
]

const secondsBeforeStart = 5

const StartGame = observer(() => {
  const { gameStore } = useStore()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [character, setCharacter] = useState<TCharacterKey>(charactersKeys[0])
  const [isCounterStarted, setIsCounterStarted] = useState<boolean>(false)

  const onChangeCharacter = (value: string) => {
    setCharacter(value as TCharacterKey)
    gameStore.setDraft()
  }

  const onChangeMode = (value: string) => {
    console.log(value)
  }

  const startTheGame = () => {
    gameStore.setPlayers(character)
    gameStore.setDraft()
    gameStore.setGameStatus(gameInProcess)
    navigate(ROUTES.game)
  }

  const onGameStartButtonClick = () => {
    setIsCounterStarted(true)
  }

  const onCountdownFinish = () => {
    startTheGame()
  }

  if (isCounterStarted) {
    return (
      <Row justify="center">
        <Col>
          <h3>{t('startGame.countTitle')}</h3>
          <Row justify="center">
            <Countdown
              value={Date.now() + 1000 * secondsBeforeStart}
              onFinish={onCountdownFinish}
            />
          </Row>
        </Col>
      </Row>
    )
  }

  return (
    <>
      <h3>{t('startGame.chooseGameMode')}</h3>
      <Select
        className={styles.select}
        placeholder={t('startGame.chooseMode')}
        options={modeOptions}
        value={gameStore.currentMode}
        onChange={onChangeMode}
      />
      <h3>{t('startGame.chooseYourCharacter')}</h3>
      <Select
        className={styles.select}
        options={characterOptions}
        value={character}
        onChange={onChangeCharacter}
      />
      <Button
        className={styles.button}
        type="primary"
        block
        onClick={onGameStartButtonClick}
      >
        {t('startGame.play')}
      </Button>
    </>
  )
})

export default StartGame
