import { createServer as createViteServer } from 'vite'
import cookieParser from 'cookie-parser'
import path from 'path'
import fs from 'fs'

import { YandexAPIRepository } from '../../shared/repository/yandexAPIRepository'

import type { Express } from 'express'
import { STUBS_IN_TEMPLATE } from './constants'

const srcPath = path.dirname(require.resolve('client'))

export const developmentServer = async (app: Express) => {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    root: srcPath,
    appType: 'custom',
  })

  app.use(vite.middlewares)

  // @ts-ignore
  app.use('*', cookieParser(), async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template = fs.readFileSync(
        path.resolve(srcPath, 'index.html'),
        'utf-8'
      )

      template = await vite.transformIndexHtml(url, template)

      const { render } = await vite.ssrLoadModule(
        path.resolve(srcPath, 'src/ssr.tsx')
      )

      const { html, style, initialState } = await render({
        url,
        repository: new YandexAPIRepository(req.headers['cookie']),
        isPlainStyle: false,
      })

      const appHtml = template
        .replace(STUBS_IN_TEMPLATE.outlet, html)
        .replace(
          STUBS_IN_TEMPLATE.state,
          JSON.stringify(initialState).replace(/</g, '\\u003c')
        )
        .replace(STUBS_IN_TEMPLATE.style, style)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(appHtml)
    } catch (e) {
      vite.ssrFixStacktrace(e as Error)
      next(e)
    }
  })
}
