import { useNavigate } from 'react-router-dom'

import { error } from '@/shared/utils/notification'
import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/app/router/config'
import authServices from '@/shared/services/authServices'
import { useForm } from '@/shared/hooks'
import { useStore } from '@/shared/store'

import schema from './schema'

import styles from './styles.module.pcss'

import type { AxiosError } from 'axios'
import type { TUseForm } from './types'
import type { TError } from '@/shared/types/error'

const SignInForm = () => {
  const navigate = useNavigate()
  const { userStore } = useStore()

  const formProps = useForm<TUseForm>({
    name: 'sign-in',
    schema,
    onSubmit: data => {
      if (data) {
        authServices
          .signIn(data)
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
      <FormInput label="Логин" name="login" />
      <FormInput label="Пароль" name="password" inputType="password" />
      <Button type="primary" htmlType="submit">
        Войти
      </Button>
      <Button type="link" onClick={() => navigate(ROUTES.signUp)}>
        Регистрация
      </Button>
    </Form>
  )
}

export { SignInForm }
