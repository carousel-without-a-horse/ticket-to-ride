import 'normalize.css'
import '@/shared/lib/i18n/config'

import { useRoutes } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { privateRouter, publicRouter } from '@/app/router'
import startServiceWorker from '@/shared/utils/startServiceWorker'
import { userStore } from '@/shared/store/user/userStore'

import { withProviders } from './providers'

startServiceWorker()

const App = observer(() => {
  const { user } = userStore

  const routes = useRoutes(user ? privateRouter : publicRouter)

  return routes
})

export default withProviders(() => <App />)
