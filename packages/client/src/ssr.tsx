import { StaticRouter } from 'react-router-dom/server'
import { renderToString } from 'react-dom/server'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'

import { userStore } from '@/shared/store/user'

import App from './app'

import type { TAuthService } from '@/shared/services/authServices/types'

type TRender = {
  url: string
  repository: Pick<TAuthService, 'fetchUser'>
  isPlainStyle: boolean
}

export async function render({ url, repository, isPlainStyle }: TRender) {
  const cache = createCache()

  const user = await repository.fetchUser()

  userStore.setUser(user)

  const html = renderToString(
    <StyleProvider mock="server" cache={cache}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StyleProvider>
  )

  const style = extractStyle(cache, isPlainStyle)

  return { html, style, initialState: user || null }
}
