import type { Preview } from '@storybook/react'
import { ConfigProvider } from 'antd'
import { Theme } from "../src/app/providers/withTheme";
import { Content, Layout } from "../src/shared/ui/Layout";
import 'normalize.css'
import '../src/app/styles'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen'
  },
}

const darkTheme = Theme(true)
export const decorators = [
  (Story) => (
    <ConfigProvider theme={darkTheme}>
      <Layout>
        <Content style={{height: '100vh', display: 'flex'}}>
         <Story/>
        </Content>
      </Layout>
    </ConfigProvider>
  )
]

export default preview
