import { Layout, Content } from '@/shared/ui/Layout'

import 'normalize.css'

import { withProviders } from './providers'
import { Outlet } from 'react-router-dom'
import type { FC } from 'react'
import { Header } from '@/widgets/Header'

const App: FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default withProviders(App)
