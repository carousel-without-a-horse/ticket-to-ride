import { BrowserRouter } from 'react-router-dom'

import type { ReactNode } from 'react'

export const withRouter = (component: () => ReactNode) => () =>
  <BrowserRouter>{component()}</BrowserRouter>
