import 'normalize.css'
import '@/shared/lib/i18n/config'

import { RouterProvider } from 'react-router-dom'

import { router } from '@/app/router'
import startServiceWorker from '@/shared/utils/startServiceWorker'

import { withProviders } from './providers'
import './styles'

startServiceWorker()

const App = () => {
  return <RouterProvider router={router} />
}

export default withProviders(App)
