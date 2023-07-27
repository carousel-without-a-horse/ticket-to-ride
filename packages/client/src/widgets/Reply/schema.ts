import { object, string } from 'yup'

const schema = object().shape({
  content: string().required('Пожалуйста, введите ваш комментарий'),
})

export default schema
