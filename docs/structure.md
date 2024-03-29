# Файловая структура

Структура проекта соотвествует [Feature-Sliced Design](https://feature-sliced.design/ru/docs/get-started/overview)

## Правила файловой структуры

При написании кода в таких директориях, как `pages, features, entities` используется структура слайса.

```sh
{layer}/
    └── {slice}/
        ├── ui/                     # Вспомогательные элементы для отрисовки родительской страницы 
        ├── model/                  # Бизнес-логика
        |   ├── model.ts            
        |   ├── types.ts
        |   └── index.ts.           
        ├── lib/                    # Инфраструктурная логика (utils/helpers/constants)
        └── index.ts                # Реэкспорт модели и других файлов при необходимости
``` 

### Файловая структура pages в качестве примера

```sh
└── pages/
    └── example-page/
        ├── model/
        |   ├── (model/index).ts    # Реализация модели
        |   ├── types.ts            # Типы модели
        |   └── tests/              # Тесты модели
        |       └── [modelName].test.ts
        ├── pages/                  # Папка дочерних страниц, она может повторять полностью файловую структуру своего родителя, в том числе может иметь своего ребенка
        ├── lib                     # Папка с утилитами, константами для родительского компонента. Если предполагается, что эта утилита/константы могут применяться не только в этом компоненте - необходимо вынести эту утилиту в src/shared/(utils|constants).
        ├── ui                      # Вспомогательные элементы для отрисовки родительской страницы
        └── index.tsx               # Основная реализация страницы
``` 