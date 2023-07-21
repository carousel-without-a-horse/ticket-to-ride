import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/app/router/config'
import { useStore } from '@/shared/store'
import { Modal } from '@/shared/ui/Modal'
import { endGame } from '@/shared/constants/gameStatus'
import ratingServices from '@/shared/services/ratingServices'
import { ratingFieldName, teamName } from '@/shared/constants/apiConsts'

import { columns } from './utils/columns'
import { toResultConverter } from './utils/resultConverter'

import styles from './styles.module.pcss'

import type { TDataSource } from '../EndGamePage/types'

const scroll = { y: '45vh' }

const EndGame = () => {
  const navigate = useNavigate()
  const { gameStore } = useStore()
  const gameStatus = gameStore.gameStatus
  const [result, setResult] = useState<TDataSource | undefined>(undefined)
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  const hideModal = () => setModalOpen(false)
  const [currentPlayerScores, setCurrentPlayerScores] = useState<string>('')
  const [resultTitle, setResultTitle] = useState<string>(
    'Вы заняли какое-то место'
  )

  useEffect(() => {
    if (gameStatus !== endGame) {
      navigate(ROUTES.root)
    }

    const players = { ...gameStore.players }

    setResult(
      toResultConverter({ ...players }, setResultTitle, setCurrentPlayerScores)
    )
  }, [gameStatus, navigate, gameStore.players])

  if (gameStore.gameStatus !== endGame) {
    return null
  }

  return (
    <Card title="Результаты" className={styles.card}>
      <Modal
        title={resultTitle}
        open={modalOpen}
        onOk={() => {
          navigate(ROUTES.startGame)
          gameStore.setGameStatus('noGame')
        }}
        onCancel={hideModal}
        okText="Начать сначала"
        cancelText="Закрыть"
      ></Modal>
      <Table
        dataSource={result}
        columns={columns}
        pagination={false}
        className={styles.table}
        scroll={scroll}
      />
      <Button
        type="primary"
        block={true}
        className={styles.button}
        onClick={() => {
          navigate(ROUTES.startGame)
          gameStore.setGameStatus('noGame')
          // login в зпросе следует брать из юзер стора текущего юзера. Сейчас как я понял такой возможности нет
          ratingServices
            .addUserToLeaderboard({
              teamName: teamName,
              ratingFieldName,
              data: {
                login: 'testLogin',
                rating: currentPlayerScores,
              },
            })
            .then(console.debug)
            .catch(console.error)
        }}
      >
        Начать сначала
      </Button>
    </Card>
  )
}

export default EndGame
