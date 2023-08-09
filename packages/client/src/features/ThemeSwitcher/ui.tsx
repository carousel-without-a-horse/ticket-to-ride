import { BulbFilled, BulbOutlined } from '@ant-design/icons'
import { observer } from 'mobx-react-lite'

import { Switch } from '@/shared/ui/Switch'
import { useStore } from '@/shared/store'

const iconBulbOutlined = <BulbOutlined rev={undefined} />
const iconBulbFilled = <BulbFilled rev={undefined} />

export const ThemeSwitcher = observer(() => {
  const { isDarkMode, handleToggleTheme } = useStore()

  return (
    <Switch
      checkedChildren={iconBulbFilled}
      unCheckedChildren={iconBulbOutlined}
      checked={isDarkMode}
      onChange={handleToggleTheme}
    />
  )
})
