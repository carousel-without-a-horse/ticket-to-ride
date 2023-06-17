import { colors } from '@/app/providers/colors'
import { RouteCard } from '@/shared/ui/Game/RouteCard'

import type { TRouteCardKey } from '@/entities/Game/data/routeCards'
import type { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
  wrapper: {
    flex: 1,
    display: 'flex',
    padding: 6,
    borderRadius: 6,
    border: `2px solid ${colors.game.pink}`,
    overflow: 'auto',
  },
}

// TODO: заменить на динамические данные
const selectedCards: TRouteCardKey[] = ['Palermo-Moskva']

export const RouteCards = () => {
  return (
    <div style={styles.wrapper} className="hide_scrollbar">
      {selectedCards.map(card => (
        <RouteCard routeKey={card} />
      ))}
    </div>
  )
}
