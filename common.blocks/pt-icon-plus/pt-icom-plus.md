# «Айкон плюс»
Несмотря на проcтоту паттерн является наиболее частотным в интерфейсе. Используется для комбинации иконок (графики) и текста (чего угодно). Размер отступа между элементами регулируется в зависимости от размещенного в них контента.


## Модификации

| Модификатор         | Значение                     | Описание                                   |  
| ------------------- | ---------------------------- | ------------------------------------------ |
| vertical-align      | center / top                 | Вертикальное выравнивание                  |
| indent              | xxs / xs / s / m / l         | Внешний отступ снизу                       |
| distribute          | default / between            | Распределение контента по горизонтали      |

### __icon

| Модификатор         | Значение                     | Описание                                   |  
| ------------------- | ---------------------------- | ------------------------------------------ |
| indent-right        | xxs / xs / s / m / l         | Отступ между иконкой и контентом справа    |
| indent-left         | xxs / xs / s / m / l         | Отступ между иконкой и контентом слева     |


### __block


## Пример
```javascript
{
  block: 'pt-icon-plus',
  mods: { 'vertical-align': 'center' },
  content: [
    {
      elem: 'icon',
      content: [
        ...
      ]
    },
    {
      elem: 'block',
      content: [
        ...
      ]
    }
  ]
}
```
