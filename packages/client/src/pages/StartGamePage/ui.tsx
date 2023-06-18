import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/app/router/config'
import { useStore } from '@/shared/store'
import { Select } from '@/shared/ui/Select/Select'

import { characterOptions } from './data'

import type { TCharacters } from '@/shared/store/game/types'

const selectStyle = { marginBottom: 40, width: '100%' }

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
        style={selectStyle}
        placeholder="Выбрать режим"
        options={[{ label: 'Против компьютера', value: 'test' }]} // доработается, как только появятся режимы
        value={gameStore.currentMode}
        onChange={onChangeMode}
      ></Select>
      <h3>Выберете своего персонажа</h3>
      <Select
        style={selectStyle}
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
        style={{ marginBottom: 15 }}
        onClick={() => navigate(ROUTES.game)}
        disabled={gameStore.currentCharacter == null ? true : false} // при наличии режимов условие изменится
      >
        Играть
      </Button>
    </>
  )
})

export default StartGame
