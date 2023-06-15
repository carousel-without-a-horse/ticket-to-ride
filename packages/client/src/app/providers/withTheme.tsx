import { useState } from 'react'
import ruRu from 'antd/lib/locale/ru_RU'
import { ConfigProvider, theme } from 'antd'

import { ThemeContext } from '@/shared/contexts'

import type { ReactNode } from 'react'
const { defaultAlgorithm, darkAlgorithm } = theme

export const withTheme = (component: () => ReactNode) => () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMode = () => {
    setIsDarkMode(previousValue => !previousValue)
  }

  return (
    <ConfigProvider
      locale={ruRu}
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorBgLayout: isDarkMode ? '#222' : '#3993DD',
          colorPrimary: isDarkMode ? '#29E7CD' : '#0062CC',
          colorBgContainer: isDarkMode ? '#000' : '#fff',
        },
      }}
    >
      <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
        {component()}
      </ThemeContext.Provider>
    </ConfigProvider>
  )
}
