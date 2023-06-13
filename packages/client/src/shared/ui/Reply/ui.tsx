import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  if (isShow) {
    return (
      <Form style={style} onFinish={onChange}>
        <FormTextarea name="value" />
        <Space>
          <Button type="primary" htmlType="submit">
            {t('reply.submit')}
          </Button>
          <Button onClick={setFalse}>{t('reply.cancel')}</Button>
        </Space>
      </Form>
    )
  }

  return (
    <Button style={styles.button} onClick={toggleShow}>
      {t('reply.submit')}
    </Button>
  )
}
