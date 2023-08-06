import path from 'path'
import fs from 'fs'

import { createServer as createViteServer } from 'vite'

import { AuthMiddleware } from '../../middlewares'

import { STUBS_IN_TEMPLATE } from './constants'

import type { Express } from 'express'
import type { TRender } from './types'

const srcPath = path.resolve(
  path.dirname(require.resolve('@carousel-without-a-horse/client')),
  '..',
)

export const developmentServer = async (app: Express): Promise<void> => {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    root: srcPath,
    appType: 'custom',
  })

  app.use(vite.middlewares)

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  app.use('*', AuthMiddleware, async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template = fs.readFileSync(
        path.resolve(srcPath, 'index.html'),
        'utf-8',
      )

      template = await vite.transformIndexHtml(url, template)

      const render = (
        await vite.ssrLoadModule(path.resolve(srcPath, 'src/ssr.tsx'))
      ).render as TRender

      const initialState = req.user || null

      const { html, style } = await render({
        url,
        initialState,
        isPlainStyle: false,
      })

      const appHtml = template
        .replace(STUBS_IN_TEMPLATE.outlet, html)
        .replace(
          STUBS_IN_TEMPLATE.state,
          JSON.stringify(initialState).replace(/</g, '\\u003c'),
        )
        .replace(STUBS_IN_TEMPLATE.style, style)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(appHtml)
    } catch (e) {
      vite.ssrFixStacktrace(e as Error)
      next(e)
    }
  })
}
