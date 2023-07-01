import type { TCharacterKey } from '@/entities/Game/data/characters'
import type {
  TColorCard,
  TColorCardType,
} from '@/entities/Game/data/colorCards'

export interface IPlayerColorCard {
  count: number
  card: TColorCard
}

export type TPlayerColorCards = Record<TColorCardType, IPlayerColorCard>

export interface IPlayer {
  character: TCharacterKey
  colorCards: TPlayerColorCards
  routeCards: string[] // TODO: тип не продуман, поменять, если понадобится
  points: number
  trains: number
}

export type TPlayersKey = 'currentPlayer' | 'opponentPlayer'

export type TPlayers = Record<TPlayersKey, IPlayer | null>

export interface ITurnState {
  colorCardsTakenCount: 0 | 1 | 2
  isPossibleToTakeColorCard: boolean
  player: TPlayersKey
}

export interface IDraft {
  hidden: TColorCard[]
  open: TColorCard[]
}
