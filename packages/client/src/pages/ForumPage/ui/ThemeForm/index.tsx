import type { CSSProperties, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/shared/ui/Card'
import { Form, FormInput, FormTags, FormWysiwyg } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import { Space } from '@/shared/ui/Space'
import type { TThemeForm } from './types'

const style: CSSProperties = { marginBottom: 40 }
const styleWysiwyg: CSSProperties = {
  width: 800,
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
    <Card title={title} style={style}>
      <Form initialValues={initialValues} onFinish={onSubmit}>
        <FormInput name="name" label="Название" />
        <FormTags name="tags" label="Теги" />
        <FormWysiwyg name="content" label="Содержимое" style={styleWysiwyg} />
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
