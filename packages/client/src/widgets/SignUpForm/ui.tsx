import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import authServices from '@/shared/services/authServices'
import * as yup from 'yup'
import useForm from '@/shared/hooks/useForm'

const schema = yup.object().shape({
  firstName: yup.string().required('Пожалуйста, введите ваше имя'),
  login: yup.string().required('Пожалуйста, введите ваш логин'),
  email: yup
    .string()
    .email('Некорретный формат электронной почты')
    .required('Пожалуйста, введите вашу электронную почту'),
  phone: yup.string().required('Пожалуйста, введите ваш телефон'),
  password: yup
    .string()
    .required('Пожалуйста, введите ваш пароль')

    .min(8, 'Пароль должен содержать минимум 8 символов')
    .max(32, 'Пароль должен содержать максимум 32 символа')
    .matches(
      /[a-z]+/,
      'Пароль должен содержать как минимум одну строчную букву'
    )
    .matches(
      /[A-Z]+/,
      'Пароль должен содержать как минимум одну заглавную букву'
    )
    .matches(/\d+/, 'Пароль должен содержать как минимум одну цифру')
    .matches(
      /[!@#%^&*)(+=._-]/,
      'Пароль должен содержать как минимум один спецсимвол'
    ),
  passwordRepeat: yup
    .string()
    .required('Пожалуйста, повторите ваш пароль')
    .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
})

const SignUpForm = () => {
  const navigate = useNavigate()

  const { formField } = useForm<yup.InferType<typeof schema>>({
    name: 'sign-up',
    schema,
    onSubmit: data => {
      if (data) {
        authServices.signUp(data).then(console.debug).catch(console.error)
      }
    },
  })

  return (
    <Form layout="vertical" style={{ minWidth: '30vw' }} {...formField}>
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
