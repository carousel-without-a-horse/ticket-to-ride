import { makeAutoObservable } from 'mobx'
import { shuffle } from 'lodash'

import getOpponentPlayerCharacter from '@/shared/utils/game/getOpponentPlayerCharacter'
import { gameSetup } from '@/entities/Game/data/gameSetup'
import { type TColorCard, colorCards } from '@/entities/Game/data/colorCards'

import type { TCharacterKey } from '@/entities/Game/data/characters'
import type {
  IDraft,
  IPlayerColorCard,
  ITurnState,
  TPlayerColorCards,
  TPlayers,
} from './types'

class GameStore {
  currentMode = 'Против Компьютера'
  turnState: ITurnState = {
    colorCardsTakenCount: 0,
    isPossibleToTakeColorCard: true,
    player: 'currentPlayer',
  }
  players: TPlayers = {
    currentPlayer: null,
    opponentPlayer: null,
  }
  draft: IDraft = {
    hidden: [],
    open: [],
  }

  constructor() {
    makeAutoObservable(this)
  }

  setTurnState(state: ITurnState) {
    this.turnState = state
  }

  setPlayers(character: TCharacterKey) {
    const startPlayerSetup = {
      colorCards: {} as TPlayerColorCards,
      routeCards: [],
      points: 0,
      trains: gameSetup.train.startCount,
    }

    this.players.currentPlayer = {
      ...startPlayerSetup,
      character,
    }
    this.players.opponentPlayer = {
      ...startPlayerSetup,
      character: getOpponentPlayerCharacter(character),
    }
  }

  setDraft() {
    const allCards = Object.entries(colorCards).reduce((accum, [_, card]) => {
      const arrOfCard = Array.from(
        { length: gameSetup.colorCards.typeCount },
        () => card
      )
      return [...accum, ...arrOfCard]
    }, [] as TColorCard[])

    const shuffledAllCards = shuffle(allCards)

    this.draft = {
      open: shuffledAllCards.splice(0, 5),
      hidden: shuffledAllCards,
    }
  }

  refreshDraft(cardIndexesToDelete: number[]) {
    const cardsToDeleteCount = cardIndexesToDelete.length
    let newOpenCards = this.draft.open.filter(
      (_, index) => !cardIndexesToDelete.includes(index)
    )
    const newCardsFromHidden = this.draft.hidden.slice(0, cardsToDeleteCount)
    newOpenCards = [...newOpenCards, ...newCardsFromHidden]

    this.draft.open = newOpenCards
    this.draft.hidden = this.draft.hidden.slice(cardsToDeleteCount)
  }

  setCardsToHand(cards: TColorCard[]) {
    const player = this.players[this.turnState.player]

    if (player) {
      cards.forEach(card => {
        let newCardType: IPlayerColorCard

        if (player.colorCards[card.type]) {
          newCardType = {
            ...player.colorCards[card.type],
            count: player.colorCards[card.type].count + 1,
          }
        } else {
          newCardType = {
            count: 1,
            card: card,
          }
        }

        player.colorCards[card.type] = newCardType
      })
    }

    console.log('player:', player)

    this.players[this.turnState.player] = player
  }

  takeOpenCard(cardIndexes: number[]) {
    const cardsToTake: TColorCard[] = []

    cardIndexes.forEach(cardIndex =>
      cardsToTake.push(this.draft.open[cardIndex])
    )

    this.setCardsToHand(cardsToTake)
    this.refreshDraft(cardIndexes)
  }

  takeHiddenCard() {
    const hiddenCards = this.draft.hidden

    const hiddenCardToTake = hiddenCards[0]

    this.draft.hidden = hiddenCards.slice(1)
    this.setCardsToHand([hiddenCardToTake])
  }
}

export default GameStore
