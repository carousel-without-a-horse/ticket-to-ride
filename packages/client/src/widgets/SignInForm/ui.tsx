import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/app/router/config'
import { useNavigate } from 'react-router-dom'
import index from '@/shared/services/authServices'
import type { TSignInSent } from '@/shared/services/authServices/types'

const SignInForm = () => {
  const navigate = useNavigate()

  const onSubmit = (data: TSignInSent) => {
    index.signIn(data).then(console.debug).catch(console.error)
  }

  return (
    <Form layout="vertical" style={{ minWidth: '30vw' }} onFinish={onSubmit}>
      <FormInput
        label="Логин"
        name="login"
        rules={[{ required: true, message: 'Пожалуйста, введите ваш логин' }]}
      />
      <FormInput
        label="Пароль"
        name="password"
        inputType="password"
        rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль' }]}
      />
      <Button type="primary" htmlType="submit">
        Войти
      </Button>
      <Button
        type="link"
        onClick={event => {
          event.preventDefault()
          // navigate(ROUTES.signUp)
        }}
      >
        Регистрация
      </Button>
    </Form>
  )
}

export { SignInForm }
