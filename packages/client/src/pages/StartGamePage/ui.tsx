import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/app/router/config'
import { useStore } from '@/shared/store'
import { Select } from '@/shared/ui/Select/Select'

import { characterOptions } from './data'

import styles from './styles.module.pcss'

import type { TCharacters } from '@/shared/store/game/types'

const modeOptions = [{ label: 'Против компьютера', value: 'test' }] // доработается, как только появятся режимы

const StartGame = observer(() => {
  const navigate = useNavigate()
  const { gameStore } = useStore()

  const onChangeCharacter = (value: string) => {
    gameStore.handleSelectCharacters(value as TCharacters)
  }

  const onChangeMode = (value: string) => {
    console.log(value)
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
        placeholder={
          gameStore.currentCharacter
            ? gameStore.currentCharacter
            : 'Выберать игрока'
        }
        options={characterOptions}
        onChange={onChangeCharacter}
      ></Select>
      <Button
        block={true}
        type="primary"
        className={styles.button}
        onClick={() => navigate(ROUTES.game)}
        disabled={gameStore.currentCharacter == null ? true : false} // при наличии режимов условие изменится
      >
        Играть
      </Button>
    </>
  )
})

export default StartGame
