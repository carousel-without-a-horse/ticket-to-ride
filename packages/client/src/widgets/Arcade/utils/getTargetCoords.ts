import { DirectionType } from '../types'

import type { TCoords } from '../types'

type TGetTargetCoords = (props: {
  coords: TCoords
  direction: DirectionType
}) => TCoords
export const getTargetCoords: TGetTargetCoords = ({ coords, direction }) => {
  switch (direction) {
    case DirectionType.Up:
      return [coords[0], coords[1] - 1]

    case DirectionType.Down:
      return [coords[0], coords[1] + 1]

    case DirectionType.Left:
      return [coords[0] - 1, coords[1]]

    case DirectionType.Right:
      return [coords[0] + 1, coords[1]]
  }
}
