import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/app/router/config'
import { useNavigate } from 'react-router-dom'
import authServices from '@/shared/services/authServices'
import * as yup from 'yup'
import useForm from '@/shared/hooks/useForm'

const schema = yup.object().shape({
  login: yup.string().required('Пожалуйста, введите ваш логин'),
  password: yup.string().required('Пожалуйста, введите ваш пароль'),
})

const SignInForm = () => {
  const navigate = useNavigate()

  const { formField } = useForm<yup.InferType<typeof schema>>({
    name: 'sign-in',
    schema,
    onSubmit: data => {
      if (data) {
        authServices.signIn(data).then(console.debug).catch(console.error)
      }
    },
  })

  return (
    <Form layout="vertical" style={{ minWidth: '30vw' }} {...formField}>
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
