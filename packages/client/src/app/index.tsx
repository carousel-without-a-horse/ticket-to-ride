import 'normalize.css'
import '@/shared/lib/i18n/config'

import { withProviders } from './providers'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/router'

const App = () => {
  return <RouterProvider router={router} />
}

export default withProviders(App)
