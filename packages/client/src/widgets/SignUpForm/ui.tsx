import { useNavigate } from 'react-router-dom'

import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import authServices from '@/shared/services/authServices'
import { useForm } from '@/shared/hooks'

import schema from './schema'

import styles from './styles.module.pcss'

import type { TUseForm } from './types'

const SignUpForm = () => {
  const navigate = useNavigate()

  const formProps = useForm<TUseForm>({
    name: 'sign-up',
    schema,
    onSubmit: data => {
      if (data) {
        authServices.signUp(data).then(console.debug).catch(console.error)
      }
    },
  })

  return (
    <Form layout="vertical" className={styles.form} {...formProps}>
      <FormInput label="Имя" name="firstName" />
      <FormInput label="Фамилия" name="secondName" />
      <FormInput label="Логин" name="login" />
      <FormInput label="Почта" name="email" type="email" />
      <FormInput label="Телефон" name="phone" type="tel" />
      <FormInput label="Пароль" name="password" inputType="password" />
      <FormInput
        label="Подтвердите пароль"
        name="passwordRepeat"
        inputType="password"
      />
      <Button type="primary" htmlType="submit">
        Зарегистрироваться
      </Button>
      <Button type="link" onClick={() => navigate(-1)}>
        &lt; Назад
      </Button>
    </Form>
  )
}

export { SignUpForm }
