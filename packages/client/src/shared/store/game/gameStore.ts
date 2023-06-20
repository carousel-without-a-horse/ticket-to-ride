import { makeAutoObservable } from 'mobx'

import { characters } from '@/entities/Game/data/characters'

import type { TCharacters } from './types'

class GameStore {
  currentCharacter: TCharacters = null
  opponentCharacter: TCharacters = null
  currentMode = 'Против Компьютера'

  constructor() {
    makeAutoObservable(this)
  }

  handleSelectCharacters(value: TCharacters) {
    this.currentCharacter = value
    const players = Object.keys(characters)
    const currentPlayerIndex = players.indexOf(value as string)
    if (players[currentPlayerIndex] === this.currentCharacter) {
      this.opponentCharacter = players[currentPlayerIndex + 1] // TODO: костыль для выбора противника, будет исправлен в задаче CAR-38
        ? (players[currentPlayerIndex + 1] as TCharacters)
        : (players[currentPlayerIndex - 1] as TCharacters)
    }
  }
}

export default GameStore
