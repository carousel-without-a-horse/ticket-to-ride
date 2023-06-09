const patterns = {
  latinCyrillicDash: {
    regExp: /^[a-zA-Zа-яёА-ЯЁ-]+$/g,
    message: 'Допустимы только латинские и кириллические символы и дефис',
  },
  firstLetterUpperCase: {
    regExp: /^[A-ZА-ЯЁ]+[a-zA-Zа-яёА-ЯЁ-]+$/g,
    message: 'Первая буква должна быть заглавной',
  },
  phone: {
    regExp: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
    message: 'Некорректный формат номера телефона',
  },
  atLeastOneLowerCase: {
    regExp: /[a-z]+/,
    message: 'Значение должно содержать как минимум одну строчную букву',
  },
  atLeastOneUpperCase: {
    regExp: /[A-Z]+/,
    message: 'Значение должно содержать как минимум одну заглавную букву',
  },
  atLeastOneSpecialChar: {
    regExp: /[!@#%^&*)(+=._-]/,
    message: 'Значение должно содержать как минимум один спецсимвол',
  },
  lettersNumbersDashUnderscore: {
    regExp: /^[\w-]*$/,
    message:
      'Значение может состоять только из латинских символов, чисел, дефиса и нижнего подчеркивания',
  },
}

export default patterns
