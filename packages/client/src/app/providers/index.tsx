import compose from 'compose-function'
import { withTheme } from './withTheme'
import { withStore } from './withStore'
import { withQuery } from './withQuery'

export const withProviders = compose(withTheme, withQuery, withStore)
