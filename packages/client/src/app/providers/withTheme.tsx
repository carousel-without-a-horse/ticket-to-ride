import ruRu from 'antd/lib/locale/ru_RU'
import { ConfigProvider, theme } from 'antd'
import { observer } from 'mobx-react-lite'
import { useMemo } from 'react'

import { useStore } from '@/shared/store'
import { colors } from '@/shared/constants/colors'

import type { PropsWithChildren, ReactNode } from 'react'

const { defaultAlgorithm, darkAlgorithm } = theme

export const Theme = (isDarkMode: boolean) => ({
  algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
  token: {
    colorBgLayout: isDarkMode ? colors.black : colors.blueMedium,
    colorPrimary: isDarkMode ? colors.greenCold : colors.blue,
    colorBgContainer: isDarkMode ? colors.totalBlack : colors.white,
    fontFamily: 'inherit',
    borderRadius: 0,
  },
})

const ThemeProvider = observer(({ children }: PropsWithChildren) => {
  const { isDarkMode } = useStore()
  const theme = useMemo(() => Theme(isDarkMode), [isDarkMode])

  return (
    <ConfigProvider locale={ruRu} theme={theme}>
      {children}
    </ConfigProvider>
  )
})

export const withTheme = (component: () => ReactNode) => () => (
  <ThemeProvider>{component()}</ThemeProvider>
)
