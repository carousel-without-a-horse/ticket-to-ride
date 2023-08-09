import 'normalize.css'
import '@/shared/lib/i18n/config'

import { useRoutes } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { privateRouter, publicRouter } from '@/app/router'
import startServiceWorker from '@/shared/utils/startServiceWorker'
import { useStore } from '@/shared/store'

import { withProviders } from './providers'

import './styles'

startServiceWorker()

const App = observer(() => {
  const { userStore } = useStore()

  return useRoutes(userStore.user ? privateRouter : publicRouter)
})

export default withProviders(() => <App />)
