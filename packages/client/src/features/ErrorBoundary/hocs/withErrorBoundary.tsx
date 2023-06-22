import { withErrorBoundary as withErrorBoundaryLib } from 'react-error-boundary'

import { ErrorElement } from '../ui/ErrorElement'

import type { FallbackProps } from 'react-error-boundary'
import type { FC } from 'react'

export const withErrorBoundary = <Props extends Record<string, unknown>>(
  component: FC<Props>,
  FallbackComponent: FC<FallbackProps> | undefined = ErrorElement
) =>
  withErrorBoundaryLib(component, {
    FallbackComponent,
  })
