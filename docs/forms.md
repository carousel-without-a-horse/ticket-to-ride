# Работа с формами

- используются компоненты `Form`, `FormInput` и другие из `@/shared/ui/Form`, под капотом которых используются компоненты библиотеки 'AntDesign';
- кастомный хук `useForm` (`@/shared/hooks/useForm`), принимающий схему валидации (`schema`), сгенерированной через методы библиотеки 'Yup';
- для работоспособности валидации требуется развернуть в пропсы компонента `Form` значение `...formProps`, полученное из `useForm`;
- в `FormInput` нужно передать только `name` (никаких `rules` передавать не нужно);

Примеры см. в `packages/client/src/widgets/SignInForm` и `packages/client/src/widgets/SignUpForm`

