import { useActor } from '@xstate/react'

import coin from 'public/assets/images/coin.gif'
import { Score } from '@/widgets/Arcade/ui/Score'

import { Image } from '../Image'
import { coordsToPosition } from '../../utils/coordsToPosition'

import styles from './styles.module.pcss'

import type { TCoinActor } from '../../machines/coinMachine/types'
import type { TCoords } from '../../types'
import type { FC } from 'react'

type TCoin = {
  coords: TCoords
}

type TCoins = {
  actor: TCoinActor
}
const Coin: FC<TCoin> = ({ coords }) => {
  const [left, top] = coordsToPosition(coords)
  return (
    <div className={styles.coin} style={{ top, left }}>
      <Image src={coin} alt="coin" />
    </div>
  )
}
export const Coins: FC<TCoins> = ({ actor }) => {
  const [state] = useActor(actor)
  const { coinsCoords, score } = state.context

  return (
    <>
      <div className={styles.score}>
        <Score score={score} />
      </div>
      {coinsCoords.map(coinCoords => (
        <Coin key={`${coinCoords[0]}${coinCoords[1]}`} coords={coinCoords} />
      ))}
    </>
  )
}
