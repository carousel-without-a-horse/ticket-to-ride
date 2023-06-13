import type { CSSProperties, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/shared/ui/Card'
import { Form, FormInput, FormTags, FormWysiwyg } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import { Space } from '@/shared/ui/Space'
import type { TThemeForm } from './types'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  const handleCancel = () => {
    navigate(-1)
  }
  return (
    <Card title={title} style={styles.wrapper}>
      <Form initialValues={initialValues} onFinish={onSubmit}>
        <FormInput name="name" label={t('theme.form.name')} />
        <FormTags name="tags" label={t('theme.form.tags')} />
        <FormWysiwyg
          name="content"
          label={t('theme.form.content')}
          style={styles.wysiwyg}
        />
        <Space>
          <Button type="primary" htmlType="submit">
            {buttonSubmitText || t('theme.form.save')}
          </Button>
          <Button onClick={handleCancel}>{t('theme.form.cancel')}</Button>
        </Space>
      </Form>
    </Card>
  )
}

export default ThemeForm
