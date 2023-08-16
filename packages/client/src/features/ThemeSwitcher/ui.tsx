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
  const { isDarkMode, themeMode, setTheme, settings, userStore } = useStore()

  const queryClient = useQueryClient()
  const { data } = useQuery({
    queryKey: ['settings'],
    queryFn: settingsServices.read,
    staleTime: Infinity,
    enabled: !!userStore.user,
  })

  const { mutateAsync } = useMutation({
    mutationKey: ['settings'],
    mutationFn: () => settingsServices.update(settings),
    onSuccess: data => {
      queryClient.setQueryData(['settings'], data)
    },
  })

  useDebounce(
    () => {
      if (!userStore.user) return
      void mutateAsync()
    },
    500,
    [settings.themeId]
  )

  useEffect(() => {
    if (!data?.themeId) return
    setTheme(data?.themeId)
  }, [data?.themeId, setTheme, userStore.user])

  const handleToggleTheme = useCallback(() => {
    const prevTheme = data?.themeId || themeMode
    const nextThemeId = prevTheme === Theme.dark ? Theme.light : Theme.dark
    setTheme(nextThemeId)
  }, [data?.themeId, setTheme, themeMode])

  return (
    <Switch
      checkedChildren={iconBulbFilled}
      unCheckedChildren={iconBulbOutlined}
      checked={isDarkMode}
      onChange={handleToggleTheme}
    />
  )
})
