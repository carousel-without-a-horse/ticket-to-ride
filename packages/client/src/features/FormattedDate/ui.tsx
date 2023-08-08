import { observer } from 'mobx-react-lite'

import { useStore } from '@/shared/store'

import type { TFormattedDate } from './types'

const defaultOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
} as const

export const FormattedDate = observer(
  ({ date, options = defaultOptions }: TFormattedDate) => {
    const { lang } = useStore()

    const locales = lang === 'en' ? 'en-En' : 'ru-Ru'

    return <>{new Intl.DateTimeFormat(locales, options).format(date)}</>
  }
)
