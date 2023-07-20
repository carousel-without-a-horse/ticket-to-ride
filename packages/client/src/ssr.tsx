import { StaticRouter } from 'react-router-dom/server'
import { renderToString } from 'react-dom/server'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'

import { createStore, StoreContext } from '@/shared/store'

import App from './app'

import type { TUser } from '@/shared/store/user'

type TRender = {
  url: string
  initialState: TUser | null

  isPlainStyle: boolean
}

export function render({ url, initialState, isPlainStyle }: TRender) {
  const cache = createCache()

  const store = createStore()

  store.userStore.setUser(initialState)

  const html = renderToString(
    <StyleProvider mock="server" cache={cache}>
      <StaticRouter location={url}>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </StaticRouter>
    </StyleProvider>,
  )

  const style = extractStyle(cache, isPlainStyle)

  return { html, style }
}
