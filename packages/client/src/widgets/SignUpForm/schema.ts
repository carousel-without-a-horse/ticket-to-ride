import { object, string, ref } from 'yup'

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
  password: string()
    .required('Пожалуйста, введите ваш пароль')
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .max(40, 'Пароль должен содержать максимум 40 символа')
    .matches(
      patterns.atLeastOneLowerCase.regExp,
      patterns.atLeastOneLowerCase.message
    )
    .matches(
      patterns.atLeastOneUpperCase.regExp,
      patterns.atLeastOneUpperCase.message
    )
    .matches(/\d+/, 'Пароль должен содержать как минимум одну цифру')
    .matches(
      patterns.atLeastOneSpecialChar.regExp,
      patterns.atLeastOneSpecialChar.message
    ),
  passwordRepeat: string()
    .required('Пожалуйста, повторите ваш пароль')
    .oneOf([ref('password')], 'Пароли должны совпадать'),
})

export default schema
