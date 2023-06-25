import compose from 'compose-function'

import { withTheme } from './withTheme'
import { withStore } from './withStore'
import { withQuery } from './withQuery'
import { withRouter } from './withRouter'
import { withUserIdentification } from './withUserIdentification'

export const withProviders = compose(
  withTheme,
  withUserIdentification,
  withQuery,
  withStore,
  withRouter
)
