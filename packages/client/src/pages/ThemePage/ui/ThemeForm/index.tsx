import type { CSSProperties, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/shared/ui/Card'
import { Form, FormInput, FormTags, FormWysiwyg } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import { Space } from '@/shared/ui/Space'
import type { TThemeForm } from './types'

const styles: Record<string, CSSProperties> = {
  wrapper: { marginBottom: 40 },
  wysiwyg: { width: 800 },
}

const ThemeForm: FC<TThemeForm> = ({
  title,
  initialValues,
  buttonSubmitText,
  onSubmit,
}) => {
  const navigate = useNavigate()
  const handleCancel = () => {
    navigate(-1)
  }
  return (
    <Card title={title} style={styles.wrapper}>
      <Form initialValues={initialValues} onFinish={onSubmit}>
        <FormInput name="name" label="Название" />
        <FormTags name="tags" label="Теги" />
        <FormWysiwyg name="content" label="Содержимое" style={styles.wysiwyg} />
        <Space>
          <Button type="primary" htmlType="submit">
            {buttonSubmitText || 'Сохранить'}
          </Button>
          <Button onClick={handleCancel}>Отменить</Button>
        </Space>
      </Form>
    </Card>
  )
}

export default ThemeForm
