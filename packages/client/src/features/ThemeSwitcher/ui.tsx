import { Switch } from '@/shared/ui/Switch'
import { BulbFilled, BulbOutlined } from '@ant-design/icons'
import { useStore } from '@/shared/store'
import { observer } from 'mobx-react-lite'

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
