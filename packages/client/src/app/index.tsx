import 'normalize.css'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/app/router'

import { withProviders } from './providers'

import type { FC } from 'react'

const App: FC = () => {
  return <RouterProvider router={router} />
}

export default withProviders(App)
