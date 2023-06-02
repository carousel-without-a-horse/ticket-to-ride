import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import authServices from '@/shared/services/authServices'
import type { TSignUpSent } from '@/shared/services/authServices/types'

const SignUpForm = () => {
  const navigate = useNavigate()

  const onFinish = (data: TSignUpSent) => {
    authServices.signUp(data).then(console.debug).catch(console.error)
  }

  return (
    <Form layout="vertical" style={{ minWidth: '30vw' }} onFinish={onFinish}>
      <FormInput
        label="Имя"
        name="firstName"
        rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}
      />
      <FormInput label="Фамилия" name="secondName" />
      <FormInput
        label="Логин"
        name="login"
        rules={[{ required: true, message: 'Пожалуйста, введите ваш логин' }]}
      />
      <FormInput
        label="Почта"
        name="email"
        type="email"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите вашу электронную почту',
          },
        ]}
      />
      <FormInput
        label="Телефон"
        name="phone"
        type="tel"
        rules={[{ required: true, message: 'Пожалуйста, введите ваш телефон' }]}
      />
      <FormInput
        label="Пароль"
        name="password"
        inputType="password"
        rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль' }]}
      />
      <FormInput
        label="Подтвердите пароль"
        inputType="password"
        rules={[
          { required: true, message: 'Пожалуйста, повторите ваш пароль' },
        ]}
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
