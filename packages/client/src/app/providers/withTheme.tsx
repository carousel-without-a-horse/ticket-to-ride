import ruRu from 'antd/lib/locale/ru_RU'
import { ConfigProvider, theme } from 'antd'
import { observer } from 'mobx-react-lite'
import { useMemo } from 'react'

import { useStore } from '@/shared/store'
import { colors } from '@/shared/constants/colors'

import type { ReactNode } from 'react'
const { defaultAlgorithm, darkAlgorithm } = theme

export const withTheme = (component: () => ReactNode) =>
  observer(() => {
    const { isDarkMode } = useStore()
    const theme = useMemo(
      () => ({
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorBgLayout: isDarkMode ? colors.black : colors.blueMedium,
          colorPrimary: isDarkMode ? colors.greenCold : colors.blue,
          colorBgContainer: isDarkMode ? colors.totalBlack : colors.white,
        },
      }),
      [isDarkMode]
    )

    return (
      <ConfigProvider locale={ruRu} theme={theme}>
        {component()}
      </ConfigProvider>
    )
  })
