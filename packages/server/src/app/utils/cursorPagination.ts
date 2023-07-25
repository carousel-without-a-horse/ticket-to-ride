import type { Model } from 'sequelize-typescript'

export function getNextId(data: Model[], pageSize: number): number | null {
  if (data.length === 0 || data.length < pageSize) {
    return null
  }
  const lastId = +data[data.length - 1].id - 1
  if (lastId <= 0) {
    return null
  }
  return lastId
}
