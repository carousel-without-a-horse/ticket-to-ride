import type { TCharacterKey } from '@/entities/Game/data/characters'
import type {
  TColorCard,
  TColorCardType,
} from '@/entities/Game/data/colorCards'

export type TPlayerColorCard = {
  count: number
  card: TColorCard
}

export type TPlayerColorCards = Record<TColorCardType, TPlayerColorCard>

export type TPlayer = {
  character: TCharacterKey
  colorCards: TPlayerColorCards
  routeCards: string[] // TODO: тип не продуман, поменять, если понадобится
  points: number
  trains: number
}

export type TPlayersKey = 'currentPlayer' | 'opponentPlayer'

export type TPlayers = Record<TPlayersKey, TPlayer | null>

export type TGameStatus = 'noGame' | 'gameInProcess' | 'endGame'

export type TTurnState = {
  colorCardsTakenCount: 0 | 1 | 2
  isPossibleToTakeColorCard: boolean
  player: TPlayersKey
}

export type TDraft = {
  hidden: TColorCard[]
  open: TColorCard[]
}
