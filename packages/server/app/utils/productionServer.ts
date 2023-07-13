import express, { Express } from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import fs from 'fs'
import { YandexAPIRepository } from '../../shared/repository/yandexAPIRepository'
import { createHash } from 'crypto'
import { STUBS_IN_TEMPLATE } from './constants'

const distPath = path.dirname(require.resolve('client/dist/index.html'))
const distSsrPath = require.resolve('client/dist-ssr/client.cjs')
export const productionServer = (app: Express) => {
  app.use('/assets', express.static(path.resolve(distPath, 'assets')))

  // @ts-ignore
  app.use('*', cookieParser(), async (req, res, next) => {
    const url = req.originalUrl

    try {
      const template = fs.readFileSync(
        path.resolve(distPath, 'index.html'),
        'utf-8'
      )
      const { render } = await import(distSsrPath)

      const { html, style, initialState } = await render({
        url,
        repository: new YandexAPIRepository(req.headers['cookie']),
        isPlainStyle: true,
      })

      let appHtml = template
        .replace(STUBS_IN_TEMPLATE.outlet, html)
        .replace(
          STUBS_IN_TEMPLATE.state,
          JSON.stringify(initialState).replace(/</g, '\\u003c')
        )

      const hash = createHash('md5').update(style).digest('hex')
      const cssFileName = `antd-${hash.substring(0, 8)}.css`

      if (!fs.existsSync(cssFileName)) {
        fs.writeFileSync(path.resolve(distPath, `assets/${cssFileName}`), style)
      }
      appHtml = appHtml.replace(
        STUBS_IN_TEMPLATE.style,
        `<link rel="stylesheet" href="/assets/${cssFileName}" />`
      )

      res.status(200).set({ 'Content-Type': 'text/html' }).end(appHtml)
    } catch (e) {
      next(e)
    }
  })
}
