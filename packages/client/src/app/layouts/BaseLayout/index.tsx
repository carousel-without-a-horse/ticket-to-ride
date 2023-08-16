import { Outlet } from 'react-router-dom'

import { Layout, Content } from '@/shared/ui/Layout'
import { Header } from '@/widgets/Header'

import styles from './styles.module.pcss'

import type { FC } from 'react'

const BaseLayout: FC = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content className={styles.content}>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default BaseLayout
