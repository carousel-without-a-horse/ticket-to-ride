import compose from 'compose-function'

import { withTheme } from './withTheme'
import { withStore } from './withStore'
import { withQuery } from './withQuery'
import { withInitialState } from './withInitialState'

export const withProviders = compose(
  withTheme,
  withInitialState,
  withQuery,
  withStore
)
