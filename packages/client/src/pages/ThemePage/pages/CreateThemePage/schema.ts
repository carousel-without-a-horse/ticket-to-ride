import { object, string } from 'yup'

const schema = object().shape({
  title: string().required('Пожалуйста, введите заголовок'),
  content: string().required('Пожалуйста, введите содержимое'),
})

export default schema
