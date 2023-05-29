import { Layout, Content } from '@/shared/ui/Layout'

import { Outlet } from 'react-router-dom'
import type { FC } from 'react'
import { Header } from '@/widgets/Header'

const BaseLayout: FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default BaseLayout
