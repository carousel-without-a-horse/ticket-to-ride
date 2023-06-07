import * as yup from 'yup'

const schema = yup.object().shape({
  login: yup.string().required('Пожалуйста, введите ваш логин'),
  password: yup.string().required('Пожалуйста, введите ваш пароль'),
})

export default schema
