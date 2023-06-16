import { t } from 'i18next'
export const getFetchingDescription = (
  isFetchingNextPage: boolean,
  hasNextPage?: boolean
): string => {
  if (isFetchingNextPage) {
    return t('table.loader.more')
  } else if (hasNextPage) {
    return t('table.loader.new')
  }

  return t('table.loader.finish')
}
