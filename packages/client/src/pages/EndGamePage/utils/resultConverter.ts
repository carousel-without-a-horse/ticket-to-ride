import type { Dispatch, SetStateAction } from 'react'
import type { TPlayer, TPlayers, TPlayersKey } from '@/shared/store/game/types'
import type { TDataSource } from '../types'

export const toResultConverter = (
  users: TPlayers,
  setResultTitle: Dispatch<SetStateAction<string>>,
  setCurrentPlayerScores: Dispatch<SetStateAction<string>>
): TDataSource => {
  const result: TDataSource = []

  Object.keys(users).forEach((user, index) => {
    const playerName = user
    const playerPoints = (
      {
        ...users[user as TPlayersKey],
      } as unknown as TPlayer
    ).points

    result.push({
      key: index.toString(),
      num: '',
      user: playerName,
      scores: playerPoints,
    })
  })

  result
    .sort((a, b) => b.scores - a.scores)
    .map((player, index) => {
      player.num = (index + 1).toString()
    })

  result.forEach((item, index) => {
    if (item.user === 'currentPlayer' && index === 0) {
      setCurrentPlayerScores(item.scores.toString())
      setResultTitle(
        `Вы победили, колличество очков - ${item.scores ? item.scores : 0}`
      )
      return
    }

    if (item.user === 'currentPlayer') {
      setResultTitle(
        `Вы заняли ${item.num} место, колличество очков - ${
          item.scores ? item.scores : 0
        }`
      )
    }
  })
  return result
}
