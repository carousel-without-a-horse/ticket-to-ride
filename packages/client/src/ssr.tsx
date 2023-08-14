import { StaticRouter } from 'react-router-dom/server'
import { renderToString } from 'react-dom/server'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'

import { createStore, StoreContext } from '@/shared/store'

import App from './app'

import type { TInitialData } from '@/shared/store'

type TRender = {
  url: string
  initialState: TInitialData
  isPlainStyle: boolean
}

export function render({ url, initialState, isPlainStyle }: TRender) {
  const cache = createCache()

  const store = createStore()
  store.setInitialData(initialState)

  const html = renderToString(
    <StyleProvider mock="server" cache={cache}>
      <StaticRouter location={url}>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </StaticRouter>
    </StyleProvider>
  )

  const style = extractStyle(cache, isPlainStyle)

  return { html, style }
}
