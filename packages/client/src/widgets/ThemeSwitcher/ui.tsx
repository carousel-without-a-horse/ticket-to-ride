import { BulbFilled, BulbOutlined } from '@ant-design/icons'

import { Switch } from '@/shared/ui/Switch'
import { useThemeContext } from '@/shared/contexts'

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
