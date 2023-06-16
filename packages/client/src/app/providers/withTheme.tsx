import ruRu from 'antd/lib/locale/ru_RU'
import { ConfigProvider, theme } from 'antd'
import { observer } from 'mobx-react-lite'

import { useStore } from '@/shared/store'

import type { ReactNode } from 'react'
const { defaultAlgorithm, darkAlgorithm } = theme

export const withTheme = (component: () => ReactNode) =>
  observer(() => {
    const { isDarkMode } = useStore()

    return (
      <ConfigProvider
        locale={ruRu}
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
          token: {
            colorBgLayout: isDarkMode ? '#222222' : '#3993DD',
            colorPrimary: isDarkMode ? '#29E7CD' : '#0062CC',
            colorBgContainer: isDarkMode ? '#000000' : '#FFFFFF',
          },
        }}
      >
        {component()}
      </ConfigProvider>
    )
  })
