import { object, string } from 'yup'

const schema = object().shape({
  login: string().required('Пожалуйста, введите ваш логин'),
  password: string().required('Пожалуйста, введите ваш пароль'),
})

export default schema
