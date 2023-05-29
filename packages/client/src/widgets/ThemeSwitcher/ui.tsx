import { Switch } from '@/shared/ui/Switch'
import { useThemeContext } from '@/shared/contexts'
import { BulbFilled, BulbOutlined } from '@ant-design/icons'

const iconBulbOutlined = <BulbOutlined rev={undefined} />
const iconBulbFilled = <BulbFilled rev={undefined} />

export const ThemeSwitcher = () => {
  const { isDarkMode, toggleMode } = useThemeContext()

  return (
    <Switch
      checkedChildren={iconBulbFilled}
      unCheckedChildren={iconBulbOutlined}
      checked={isDarkMode}
      onChange={toggleMode}
    />
  )
}
