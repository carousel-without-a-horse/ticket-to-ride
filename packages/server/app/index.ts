import { createProxyMiddleware } from 'http-proxy-middleware'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { getMockThemes, getMockTheme } from '../shared/mock'
import { createClientAndConnect } from '../db'

import { developmentServer, productionServer } from './utils'

dotenv.config()
createClientAndConnect()

const isDev = process.env.NODE_ENV === 'development'

export async function startServer() {
  const app = express()
  app.use(cors())

  app.use(
    '/api/v2',
    createProxyMiddleware({
      changeOrigin: true,
      cookieDomainRewrite: {
        '*': '',
      },
      target: 'https://ya-praktikum.tech',
    })
  )

  app.get('/api/themes', (req, res) => {
    const cursor = req.query.cursor ? parseInt(req.query.cursor.toString()) : 0
    const data = getMockThemes(cursor)

    setTimeout(() => res.json(data), 1000)
  })

  app.get('/api/themes/:id', (_, res) => {
    const data = getMockTheme()

    setTimeout(() => res.json(data), 1000)
  })

  if (isDev) {
    await developmentServer(app)
  } else {
    productionServer(app)
  }

  return app
}
