import path from 'path'
import fs from 'fs'
import { createHash } from 'crypto'

import express, { Express } from 'express'

import { AuthMiddleware } from '../../middlewares'

import { STUBS_IN_TEMPLATE } from './constants'

import type { TRender } from './types'

const distPath = path.dirname(require.resolve('client/dist/index.html'))
const distSsrPath = require.resolve('client/dist-ssr/client.cjs')
export const productionServer = (app: Express): void => {
  app.use('/assets', express.static(path.resolve(distPath, 'assets')))

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  app.use('*', AuthMiddleware, async (req, res, next) => {
    const url = req.originalUrl

    try {
      const template = fs.readFileSync(
        path.resolve(distPath, 'index.html'),
        'utf-8',
      )
      const { render } = (await import(distSsrPath)) as { render: TRender }
      const initialState = req.user || null
      const { html, style } = await render({
        url,
        initialState,
        isPlainStyle: true,
      })

      let appHtml = template
        .replace(STUBS_IN_TEMPLATE.outlet, html)
        .replace(
          STUBS_IN_TEMPLATE.state,
          JSON.stringify(initialState).replace(/</g, '\\u003c'),
        )

      const hash = createHash('md5').update(style).digest('hex')
      const cssFileName = `antd-${hash.substring(0, 8)}.css`

      if (!fs.existsSync(cssFileName)) {
        fs.writeFileSync(path.resolve(distPath, `assets/${cssFileName}`), style)
      }
      appHtml = appHtml.replace(
        STUBS_IN_TEMPLATE.style,
        `<link rel="stylesheet" href="/assets/${cssFileName}" />`,
      )

      res.status(200).set({ 'Content-Type': 'text/html' }).end(appHtml)
    } catch (e) {
      next(e)
    }
  })
}
