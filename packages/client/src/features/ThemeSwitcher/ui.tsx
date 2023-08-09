import { BulbFilled, BulbOutlined } from '@ant-design/icons'
import { observer } from 'mobx-react-lite'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { useCallback, useEffect } from 'react'

import { Switch } from '@/shared/ui/Switch'
import { useStore } from '@/shared/store'
import { settingsServices } from '@/entities/settings'
import { Theme } from '@/shared/store/types'
import { useDebounce } from '@/shared/hooks'

const iconBulbOutlined = <BulbOutlined rev={undefined} />
const iconBulbFilled = <BulbFilled rev={undefined} />

export const ThemeSwitcher = observer(() => {
  const { isDarkMode, setTheme, settings } = useStore()

  const queryClient = useQueryClient()
  const { data } = useQuery({
    queryKey: ['settings'],
    queryFn: settingsServices.read,
    staleTime: Infinity,
  })

  const { mutateAsync } = useMutation({
    mutationKey: ['settings'],
    mutationFn: () => settingsServices.update(settings),
    onSuccess: data => {
      queryClient.setQueryData(['settings'], data)
    },
  })

  useDebounce(() => mutateAsync(), 500, [settings.themeId])

  useEffect(() => {
    if (!data?.themeId) return
    setTheme(data?.themeId)
  }, [data?.themeId, setTheme])

  const handleToggleTheme = useCallback(() => {
    const nextThemeId = data?.themeId === Theme.dark ? Theme.light : Theme.dark
    setTheme(nextThemeId)
  }, [data?.themeId, setTheme])

  return (
    <Switch
      checkedChildren={iconBulbFilled}
      unCheckedChildren={iconBulbOutlined}
      checked={isDarkMode}
      onChange={handleToggleTheme}
    />
  )
})
