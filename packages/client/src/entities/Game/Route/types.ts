import type { IRoute } from '@/entities/Game/data/routes'

interface IPassedProps extends IRoute {
  name: string
}

interface IProps extends IPassedProps {
  x1: number
  y1: number
  x2: number
  y2: number
  color: string
}

export type { IPassedProps, IProps }
