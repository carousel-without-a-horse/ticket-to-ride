import { useNavigate } from 'react-router-dom'

import { error } from '@/shared/utils/notification'
import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import authServices from '@/shared/services/authServices'
import { useForm } from '@/shared/hooks'
import { useStore } from '@/shared/store'
import { ROUTES } from '@/app/router/config'

import schema from './schema'

import styles from './styles.module.pcss'

import type { AxiosError } from 'axios'
import type { TUseForm } from './types'
import type { TError } from '@/shared/types/error'

const SignUpForm = () => {
  const navigate = useNavigate()
  const { userStore } = useStore()

  const formProps = useForm<TUseForm>({
    name: 'sign-up',
    schema,
    onSubmit: data => {
      if (data) {
        const user = {
          first_name: data.firstName,
          second_name: data.secondName,
          login: data.login,
          email: data.email,
          password: data.password,
          phone: data.phone,
        }
        authServices
          .signUp(user)
          .then(() => userStore.fetchUser())
          .then(() => {
            if (userStore.error) {
              throw userStore.error
            }
            navigate(ROUTES.root)
          })
          .catch((err: AxiosError) => {
            const res = err.response?.data as TError
            error('Error', res?.reason || '')
          })
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
