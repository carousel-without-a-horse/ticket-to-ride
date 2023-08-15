import { useActor } from '@xstate/react'

import monster from 'public/assets/images/monster.gif'

import { Image } from '../Image'
import { coordsToPosition } from '../../utils/coordsToPosition'

import styles from './styles.module.pcss'

import type { FC } from 'react'
import type { TMonster } from './types'

export const Monster: FC<TMonster> = ({ actor }) => {
  const [state] = useActor(actor)
  const { coords } = state.context
  if (!coords) return null

  const [left, top] = coordsToPosition(coords)

  return (
    <>
      <div className={styles.monster} style={{ top, left }}>
        <Image src={monster} alt="monster" />
      </div>
    </>
  )
}
