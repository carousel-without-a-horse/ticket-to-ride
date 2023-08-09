import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Tabs as LibTabs } from 'antd'

import type { FC } from 'react'
import type { TTabsProps, TTabsOnChange } from './types'

const TAB_PARAM_KEY = 'tab'

export const Tabs: FC<TTabsProps> = ({
  withQueryParams,
  defaultActiveKey,
  onChange,
  ...props
}) => {
  const [searchParams, setSearchParams] = useSearchParams(
    defaultActiveKey
      ? new URLSearchParams({ [TAB_PARAM_KEY]: defaultActiveKey })
      : undefined
  )

  const activeKey = useMemo(() => {
    return searchParams.get(TAB_PARAM_KEY) || defaultActiveKey
  }, [defaultActiveKey, searchParams])

  const handleChange = useCallback<TTabsOnChange>(
    key => {
      if (withQueryParams) {
        setSearchParams({ [TAB_PARAM_KEY]: key })
      }

      onChange?.(key)
    },
    [onChange, setSearchParams, withQueryParams]
  )

  return (
    <LibTabs
      defaultActiveKey={activeKey}
      activeKey={activeKey}
      {...props}
      onChange={handleChange}
    />
  )
}
