import type { FC } from 'react'
import { Button } from '@/shared/ui/Button'
import { Space } from '@/shared/ui/Space'
import { useToggle } from '@/shared/hooks'
import { Form, FormTextarea } from '@/shared/ui/Form'
import type { TReply } from './types'

const styles = {
  button: { marginBottom: 20 },
}
export const Reply: FC<TReply> = ({ isOpen = false, style, onChange }) => {
  const { state: isShow, toggle: toggleShow, setFalse } = useToggle(isOpen)

  if (isShow) {
    return (
      <Form style={style} onFinish={onChange}>
        <FormTextarea name="value" />
        <Space>
          <Button type="primary" htmlType="submit">
            Ответить
          </Button>
          <Button onClick={setFalse}>Отменить</Button>
        </Space>
      </Form>
    )
  }

  return (
    <Button style={styles.button} onClick={toggleShow}>
      Ответить
    </Button>
  )
}
