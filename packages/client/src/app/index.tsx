import { useState } from 'react'
import { ConfigProvider, theme } from 'antd'
import ruRu from 'antd/lib/locale/ru_RU'
import { Button, Layout } from '@/shared/ui'
import Guide from '../pages/guide'
import 'normalize.css'

const { defaultAlgorithm, darkAlgorithm } = theme

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleClick = () => {
    setIsDarkMode(previousValue => !previousValue)
  }

  return (
    <ConfigProvider
      locale={ruRu}
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorBgLayout: isDarkMode ? '#000' : '#3993DD',
          colorPrimary: isDarkMode ? '#29E7CD' : '#0062CC',
        },
      }}>
      <Layout className="App">
        <Button onClick={handleClick}>
          Change Theme to {isDarkMode ? 'Light' : 'Dark'}
        </Button>
        <Guide />
      </Layout>
    </ConfigProvider>
  )
}

export default App
