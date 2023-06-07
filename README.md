# Ticket to Ride

## Документация

- [Файловая структура](docs/structure.md)
- [Styleguide](docs/codestyle.md)
- [Сборка](docs/build.md)
- [Игра](docs/game.md)

## Прототипы

- [Игра](https://www.figma.com/file/AaCD1OHQASyc2kIsJ7v5E3/%D0%91%D0%B8%D0%BB%D0%B5%D1%82-%D0%BD%D0%B0-%D0%BF%D0%BE%D0%B5%D0%B7%D0%B4?type=design&node-id=0-1&t=241Fgkejr3o5artK-0)
- [Остальной интерфейс](https://www.figma.com/file/j3e2w5TfcMxR23Ag8wfKgD/Ticket-to-Ride-(antd))

## Как запускать?

1. Убедитесь что у вас установлен `node` и `docker`
2. Выполните команду `yarn bootstrap` - это обязательный шаг, без него ничего работать не будет :)
3. Выполните команду `yarn dev`
4. Выполните команду `yarn dev:client` чтобы запустить только клиент
5. Выполните команду `yarn dev:server` чтобы запустить только server


## Как добавить зависимости?
В этом проекте используется `monorepo` на основе [`lerna`](https://github.com/lerna/lerna)

Чтобы добавить зависимость для клиента 
```yarn lerna add {your_dep} --scope client```

Для сервера
```yarn lerna add {your_dep} --scope server```

И для клиента и для сервера
```yarn lerna add {your_dep}```


Если вы хотите добавить dev зависимость, проделайте то же самое, но с флагом `dev`
```yarn lerna add {your_dep} --dev --scope server```


### Тесты

Для клиента используется [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/)

```yarn test```

### Линтинг

```yarn lint```
