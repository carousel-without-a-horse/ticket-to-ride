import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Card } from '@/shared/ui/Card'
import { Form, FormInput, FormTags, FormWysiwyg } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import { Space } from '@/shared/ui/Space'

import styles from './styles.module.pcss'

import type { FC } from 'react'
import type { TThemeForm } from './types'

const ThemeForm: FC<TThemeForm> = ({
  title,
  initialValues,
  buttonSubmitText,
  isLoading,
  formProps,
}) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <Card title={title} className={styles.wrapper}>
      <Form initialValues={initialValues} {...formProps}>
        <FormInput name="title" label={t('theme.form.name')} />
        <FormTags name="tags" label={t('theme.form.tags')} />
        <FormWysiwyg
          name="content"
          label={t('theme.form.content')}
          className={styles.wysiwyg}
        />
        <Space>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {buttonSubmitText || t('theme.form.save')}
          </Button>
          <Button onClick={handleCancel}>{t('theme.form.cancel')}</Button>
        </Space>
      </Form>
    </Card>
  )
}

export default ThemeForm
