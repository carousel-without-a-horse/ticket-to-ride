import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import userServices from '@/shared/services/userServices'
import { useForm } from '@/shared/hooks'
import { error, success } from '@/shared/utils/notification'

import schema from './schema'

import styles from './styles.module.pcss'

import type { TUseForm } from './types'

const PasswordForm = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const formProps = useForm<TUseForm>({
    name: 'password-form',
    schema,
    onSubmit: data => {
      if (data) {
        userServices
          .changeUserPassword(data)
          .then(console.debug)
          .catch(() => error())
          .finally(() => success())
      }
    },
  })

  return (
    <Form layout="vertical" className={styles.form} {...formProps}>
      <FormInput
        label={t('profile.oldPassword')}
        name="oldPassword"
        inputType="password"
      />
      <FormInput
        label={t('profile.newPassword')}
        name="newPassword"
        inputType="password"
      />
      <FormInput
        name="passwordRepeat"
        label={t('profile.passwordRepeat')}
        inputType="password"
      />
      <Button type="primary" htmlType="submit">
        {t('profile.save')}
      </Button>
      <Button type="link" onClick={() => navigate(-1)}>
        &lt; {t('profile.back')}
      </Button>
    </Form>
  )
}

export { PasswordForm }
