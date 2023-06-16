import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Content } from '@/shared/ui/Layout'
import { ROUTES } from '@/app/router/config'
import { useStore } from '@/shared/store'
import { Select } from '@/shared/ui/Select/Select'

import { playersOptions } from './data'

import type { TPlayer } from '@/shared/store/types'

const cardStyle = {
  marginBottom: 50,
  width: '100%',
  maxWidth: 1024,
}

const selectStyle = { marginBottom: 40, width: '100%' }

const StartGame = observer(() => {
  const navigate = useNavigate()
  const { currentPlayer, handlePlayerChoice } = useStore()

  const onChangePlayer = (value: string) => {
    handlePlayerChoice(value as TPlayer)
  }

  const onChangeMode = (value: string) => {
    console.log(value)
  }

  return (
    <Content>
      <Card style={cardStyle}>
        <h3>Выберете режим игры</h3>
        <Select
          style={selectStyle}
          placeholder="Выбрать режим"
          options={[{ label: 'Тестовый режим', value: 'test' }]} // доработается, как только появятся режимы
          onChange={onChangeMode}
        ></Select>
        <h3>Выберете свой персонаж</h3>
        <Select
          style={selectStyle}
          placeholder={currentPlayer ? currentPlayer : 'Выберать игрока'}
          options={playersOptions}
          onChange={onChangePlayer}
        ></Select>
        <Button
          block={true}
          type="primary"
          style={{ marginBottom: 15 }}
          onClick={() => navigate(ROUTES.game)}
          disabled={currentPlayer == null ? true : false} // при наличии режимов условие изменится
        >
          Играть
        </Button>
        <Button block={true} onClick={() => navigate(ROUTES.root)}>
          Назад
        </Button>
      </Card>
    </Content>
  )
})

export default StartGame
