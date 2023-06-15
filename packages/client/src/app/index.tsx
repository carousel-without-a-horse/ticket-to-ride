import 'normalize.css'
import { RouterProvider } from 'react-router-dom'

import startServiceWorker from '@/shared/utils/startServiceWorker'
import { router } from '@/app/router'

import { withProviders } from './providers'

import type { FC } from 'react'

startServiceWorker()

const App: FC = () => {
  return <RouterProvider router={router} />
}

export default withProviders(App)
