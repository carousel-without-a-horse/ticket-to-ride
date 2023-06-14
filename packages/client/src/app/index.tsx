import 'normalize.css'

import { withProviders } from './providers'
import { RouterProvider } from 'react-router-dom'
import type { FC } from 'react'
import { router } from '@/app/router'
import React from 'react'
import startServiceWorker from '@/shared/utils/startServiceWorker'

startServiceWorker()

const App: FC = () => {
  return <RouterProvider router={router} />
}

export default withProviders(App)
