import { gridCoordsList } from '../../utils/gridCoordsList'
import { variables } from '../../utils/constants'

import styles from './styles.module.pcss'

import type { TGridSquare } from './types'
import type { FC, PropsWithChildren } from 'react'

const GridSquare: FC<TGridSquare> = ({ x, y }) => (
  <div
    className={styles.gridSquare}
    style={{
      top: `${y * variables.arcadeGridSquareSize}px`,
      left: `${x * variables.arcadeGridSquareSize}px`,
    }}
  />
)

export const Grid = ({ children }: PropsWithChildren) => {
  return (
    <section className={styles.layout}>
      {gridCoordsList.map(([x, y]) => (
        <GridSquare key={`${x}${y}`} x={x} y={y} />
      ))}
      {children}
    </section>
  )
}
