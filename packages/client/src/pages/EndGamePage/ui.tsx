import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/app/router/config'
import { useStore } from '@/shared/store'
import { Modal } from '@/shared/ui/Modal'

import { columns } from './utils/columns'

import styles from './styles.module.pcss'

import type { TDataSource } from '../EndGamePage/types'
import type { TPlayer, TPlayers, TPlayersKey } from '@/shared/store/game/types'

const scroll = { y: '45vh' }

const EndGame = () => {
  const navigate = useNavigate()
  const { gameStore } = useStore()
  const [result, setResult] = useState<TDataSource | undefined>(undefined)
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  const hideModal = () => setModalOpen(false)
  const [resultTitle, setResultTitle] = useState<string>(
    'Вы заняли какое-то место'
  )

  useEffect(() => {
    if (gameStore.gameStatus !== 'endGame') {
      navigate(ROUTES.root)
    }
    const toResultConverter = (users: TPlayers): TDataSource => {
      const result: TDataSource = []
      Object.keys(users).forEach((key, i) => {
        const playerName = key
        const playerPoints = (
          {
            ...{ ...gameStore.players }[key as TPlayersKey],
          } as unknown as TPlayer
        ).points
        result.push({
          key: i.toString(),
          num: (i + 1).toString(),
          user: playerName,
          scores: playerPoints,
        })
      })
      result.sort((a, b) => (a.scores < b.scores ? -1 : 1))
      result.forEach((item, index) => {
        if (item.user === 'currentPlayer' && index === 0) {
          setResultTitle(
            `Вы победили, колличество очков - ${item.scores ? item.scores : 0}`
          )
          return
        } else if (item.user === 'currentPlayer') {
          setResultTitle(
            `Вы заняли ${item.num} место, колличество очков - ${
              item.scores ? item.scores : 0
            }`
          )
        }
      })
      return result
    }
    setResult(toResultConverter({ ...gameStore.players }))
  }, [gameStore, navigate])

  return gameStore.gameStatus === 'endGame' ? (
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
        }}
      >
        Начать сначала
      </Button>
    </Card>
  ) : (
    <></>
  )
}

export default EndGame
