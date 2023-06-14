import { object, string, ref } from 'yup'

import patterns from '@/shared/constants/patterns'

const schema = object().shape({
  oldPassword: string()
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
  newPassword: string()
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
    .oneOf([ref('newPassword')], 'Пароли должны совпадать'),
})

export default schema
