import { createContext, useContext } from 'react'
import type { TThemeContext } from './types'

export const ThemeContext = createContext<TThemeContext | null>(null)

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(
      'useThemeContext has to be used within <ThemeContext.Provider>'
    )
  }

  return context
}
