import { Outlet } from 'react-router-dom'

import { Layout, Content } from '@/shared/ui/Layout'
import { Header } from '@/widgets/Header'

import type { FC } from 'react'

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
