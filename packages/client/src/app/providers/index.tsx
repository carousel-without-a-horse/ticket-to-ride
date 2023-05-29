import compose from 'compose-function'
import { withTheme } from './withTheme'

export const withProviders = compose(withTheme)
