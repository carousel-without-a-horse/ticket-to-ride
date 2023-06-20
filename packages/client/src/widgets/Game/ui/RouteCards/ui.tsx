import { RouteCard } from '@/shared/ui/Game/RouteCard'

import styles from './styles.module.pcss'

import type { TRouteCardKey } from '@/entities/Game/data/routeCards'

// TODO: заменить на динамические данные
const selectedCards: TRouteCardKey[] = ['Palermo-Moskva']

export const RouteCards = () => {
  return (
    <div className={styles.wrapper}>
      {selectedCards.map(card => (
        <RouteCard routeKey={card} />
      ))}
    </div>
  )
}
