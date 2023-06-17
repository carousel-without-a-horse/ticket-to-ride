import { Button } from '@/shared/ui/Game/Button'

import styles from './styles.module.pcss'

export const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <Button variant="small">Завершить ход</Button>

      <Button variant="small">Меню</Button>
    </div>
  )
}
