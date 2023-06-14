import 'normalize.css'

import { RouterProvider } from 'react-router-dom'
import React from 'react'

import { withProviders } from './providers'

import { router } from '@/app/router'

import type { FC } from 'react'

const App: FC = () => {
  return <RouterProvider router={router} />
}

export default withProviders(App)
