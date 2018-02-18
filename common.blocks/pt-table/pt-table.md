# Таблица
Используется для представления однотипной, повторяющейся информации. Набор модификаторов покрывает максимальное количество как стилистических так и структурных потребностей. Также есть возможность маркеровать строки по статусу.

## Модификации

### pt-table
| Модификатор | Значение                        | Описание                |  
| ----------- | ------------------------------- | ----------------------- |
| view        | default / ghost / inverse       |  Фона блока             |
| border      | all                             |  Бордер блока           |
| stripe      | even / odd                      |  Зебрирование таблицы   |
| space-a / space-h / space-v      | xs / s / m / l                       |  Внутренние отступы ячеек   |



### __row

| Модификатор | Значение                        | Описание                |  
| ----------- | ------------------------------- | ----------------------- |
| border      | top / bottom                    |  Бордер строки          |
| view        | head                            |  Применение стилей шапки  |
| status      | default / error / success / warning |  Отображение статуса цветной полоской слева  |



### __col

| Модификатор | Значение                        | Описание                |  
| ----------- | ------------------------------- | ----------------------- |
| align       | right                           |  Горизонтальное выравнивание внутри ячейки |
| width       | 5 - 100 с шагом 5               |  Ширина ячейки  |




## Пример
```
{
	block: 'pt-table',
	mods: { view: 'default', 'space-a': 's', stripe: 'even' },
	content: [
		{
			elem: 'row',
			elemMods: { 'view': 'head' },
			content: [
				{
					elem: 'col',
					elemMods: { width: '30' },
					content: [
						{
							block: 'text',
							mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
							content: 'Модификатор'
						}
					]
				},
				{
					elem: 'col',
					elemMods: { width: '35' },
					content: [
						{
							block: 'text',
							mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
							content: 'Значение'
						}
					]
				},
				{
					elem: 'col',
					elemMods: { width: '35' },
					content: [
						{
							block: 'text',
							mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
							content: 'Описание'
						}
					]
				}
			]
		},
		{
			elem: 'row',
			content: [
				{
					elem: 'col',
					elemMods: { width: '30' },
					content: [
						{
							block: 'text',
							tag: 'a',
							attrs: { href: '#view' },
							mods: { size: 'm', view: 'link' },
							content: 'view'
						}
					]
				},
				{
					elem: 'col',
					elemMods: { width: '35' },
					content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'default / ghost / inverse'
						}
					]
				},
				{
					elem: 'col',
					elemMods: { width: '35' },
					content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Фона блока'
						}
					]
				}
			]
		}
	]
}
```











