import { useNavigate } from 'react-router-dom'

import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import userServices from '@/shared/services/userServices'
import { useForm } from '@/shared/hooks'

import schema from './schema'

import type { TUseForm } from './types'

const PasswordForm = () => {
  const navigate = useNavigate()

  const formProps = useForm<TUseForm>({
    name: 'password-form',
    schema,
    onSubmit: data => {
      if (data) {
        userServices
          .changeUserPassword(data)
          .then(console.debug)
          .catch(console.error)
      }
    },
  })

  return (
    <Form layout="vertical" style={{ minWidth: '30vw' }} {...formProps}>
      <FormInput
        label="Старый пароль"
        name="oldPassword"
        inputType="password"
      />
      <FormInput label="Пароль" name="newPassword" inputType="password" />
      <FormInput
        name="passwordRepeat"
        label="Подтвердите пароль"
        inputType="password"
      />
      <Button type="primary" htmlType="submit">
        Сохранить
      </Button>
      <Button type="link" onClick={() => navigate(-1)}>
        &lt; Назад
      </Button>
    </Form>
  )
}

export { PasswordForm }
