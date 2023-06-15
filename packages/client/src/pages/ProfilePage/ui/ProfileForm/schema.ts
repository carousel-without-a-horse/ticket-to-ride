import { object, string } from 'yup'

import patterns from '@/shared/constants/patterns'

const schema = object().shape({
  firstName: string()
    .required('Пожалуйста, введите ваше имя')
    .matches(
      patterns.latinCyrillicDash.regExp,
      patterns.latinCyrillicDash.message
    )
    .matches(
      patterns.firstLetterUpperCase.regExp,
      patterns.firstLetterUpperCase.message
    ),
  secondName: string()
    .required('Пожалуйста, введите вашу фамилию')
    .matches(
      patterns.latinCyrillicDash.regExp,
      patterns.latinCyrillicDash.message
    )
    .matches(
      patterns.firstLetterUpperCase.regExp,
      patterns.firstLetterUpperCase.message
    ),
  login: string()
    .required('Пожалуйста, введите ваш логин')
    .min(3, 'Логин должен содержать минимум 3 символа')
    .max(20, 'Логин должен содержать максимум 20 символов')
    .matches(
      patterns.lettersNumbersDashUnderscore.regExp,
      patterns.lettersNumbersDashUnderscore.message
    ),
  email: string()
    .email('Некорретный формат электронной почты')
    .required('Пожалуйста, введите вашу электронную почту'),
  phone: string()
    .required('Пожалуйста, введите ваш телефон')
    .matches(patterns.phone.regExp, patterns.phone.message),
})

export default schema
