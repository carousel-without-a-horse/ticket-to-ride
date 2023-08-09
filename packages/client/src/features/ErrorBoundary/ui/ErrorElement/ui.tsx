import { useErrorBoundary } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'

import { Card } from '@/shared/ui/Card'
import { Result } from '@/shared/ui/Result'
import { Button } from '@/shared/ui/Button'

import type { FC } from 'react'
import type { FallbackProps } from 'react-error-boundary'

const getText = (error: unknown): string => {
  if (error instanceof Response) {
    if (error.status === 404) {
      return 'errorBoundary.list.notFound'
    }

    if (error.status === 401) {
      return 'errorBoundary.list.notAuthorized'
    }

    if (error.status === 500) {
      return 'errorBoundary.list.serverError'
    }
  }

  return 'errorBoundary.list.defaultError'
}
export const ErrorElement: FC<FallbackProps> = ({ error }) => {
  const { t } = useTranslation()
  const { resetBoundary } = useErrorBoundary()

  const title = t(getText(error))

  const extra = (
    <Button type="primary" onClick={resetBoundary}>
      {t('errorBoundary.reset')}
    </Button>
  )

  return (
    <Card>
      <Result title={title} extra={extra} />
    </Card>
  )
}
