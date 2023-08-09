import { developmentServer } from './developmentServer'
import { productionServer } from './productionServer'

import type { Express } from 'express'
import type { UserSettings } from '../../models/userSettings'

export const server = async (
  app: Express,
  getUserSettings: (userId: number) => Promise<UserSettings>,
): Promise<void> => {
  const isDev = process.env.NODE_ENV === 'development'
  if (isDev) {
    await developmentServer(app, getUserSettings)
  } else {
    productionServer(app, getUserSettings)
  }
}
