import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/app/router/config'
import { useStore } from '@/shared/store'
import { Select } from '@/shared/ui/Select/Select'
import {
  type TCharacterKey,
  charactersKeys,
} from '@/entities/Game/data/characters'

import { characterOptions } from './data'

import styles from './styles.module.pcss'

const modeOptions = [{ label: 'Против компьютера', value: 'test' }] // доработается, как только появятся режимы

const StartGame = observer(() => {
  const { gameStore } = useStore()

  const [character, setCharacter] = useState<TCharacterKey>(charactersKeys[0])

  const navigate = useNavigate()

  const onChangeCharacter = (value: string) => {
    setCharacter(value as TCharacterKey)
    gameStore.setDraft()
  }

  const onChangeMode = (value: string) => {
    console.log(value)
  }

  const onGameStart = () => {
    gameStore.setPlayers(character)
    gameStore.setDraft()

    navigate(ROUTES.game)
  }

  return (
    <>
      <h3>Выберете режим игры</h3>
      <Select
        className={styles.select}
        placeholder="Выбрать режим"
        options={modeOptions}
        value={gameStore.currentMode}
        onChange={onChangeMode}
      ></Select>
      <h3>Выберете своего персонажа</h3>
      <Select
        className={styles.select}
        options={characterOptions}
        value={character}
        onChange={onChangeCharacter}
      ></Select>
      <Button
        block={true}
        type="primary"
        className={styles.button}
        onClick={onGameStart}
      >
        Играть
      </Button>
    </>
  )
})

export default StartGame
