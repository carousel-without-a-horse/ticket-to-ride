import { useActor } from '@xstate/react'

import player from 'public/assets/images/thief.gif'
import { Health } from '@/widgets/Arcade/ui/Health'

import { Image } from '../Image'
import { usePlayerControls } from '../../hooks/usePlayerControls'
import { DirectionType } from '../../types'
import { coordsToPosition } from '../../utils/coordsToPosition'

import styles from './styles.module.pcss'

import type { FC } from 'react'
import type { TPlayer } from './types'

export const Player: FC<TPlayer> = ({ actor }) => {
  const [state, send] = useActor(actor)
  const { coords, health } = state.context
  const [left, top] = coordsToPosition(coords)

  const handleArrowClicked = (direction: DirectionType) => {
    send({ type: 'ARROW_BUTTON_CLICKED', direction })
  }

  usePlayerControls({
    handleArrowUp: () => handleArrowClicked(DirectionType.Up),
    handleArrowRight: () => handleArrowClicked(DirectionType.Right),
    handleArrowDown: () => handleArrowClicked(DirectionType.Down),
    handleArrowLeft: () => handleArrowClicked(DirectionType.Left),
  })
  return (
    <>
      <div className={styles.health}>
        <Health health={health} />
      </div>
      <div className={styles.player} style={{ top, left }}>
        <Image src={player} alt="player" />
      </div>
    </>
  )
}
