# Блок формы
Используется для представления информаци, которая помогает получать данные от пользователя (инпуты, селекты, чекбоксы, ...). 


## Пример
```javascript
{
	block: 'pt-form',
	mods: { view: 'ghost' },
	content: [
	{
		elem: 'item',
		elemMods: { 'space-h': 'xl', 'space-v': 'xl', },
		content: [
			'Free to join'
		]
	},
	{
		elem: 'item',
		elemMods: { 'space-h': 'xl' },
		content: [
			{
				elem: 'item',
				elemMods: { 'indent-b': 'l', 'distribute': 'between', 'vertical-align': 'center' },
				content: [
					{
						elem: 'label',
						...
					},
					{
						elem: 'control',
						...
					}
				]
			},
			{
				elem: 'item',
				elemMods: { 'indent-b': 'l', 'distribute': 'between', 'vertical-align': 'center' },
				content: [
					{
						elem: 'label',
						...
					},
					{
						elem: 'control',
						...
					}
				]
			}
		]
	},
	{
		elem: 'item',
		elemMods: { 'space-a': 'xl', type: 'action', 'vertical-align': 'center' },
		content: [
			{
				block: 'text',
				...

			},
			{
				block: 'button',
				...
			}
		]
	}]
}
```


## Модификации

### __pt-list

| Модификатор | Значение                     | Описание                |  
| ----------- | ---------------------------- | ----------------------- |
| view        | default / ghost / inverse    | Фон блока               |
| border      | all                          | Круговой бордер блока   |
| shadow      | cloud                        | Тень                    |



### __list

| Модификатор | Значение                     | Описание                                   |  
| ----------- | ---------------------------- | ------------------------------------------ |
| border      | top / bottom / all           | Бордер строк                               |
| distribute  | default / between            | Распределение контента по горизонтали      |
| type        | action                       | Отображение футера с активными действиями  |
| space-a / space-h / space-v / space-t / space-r / space-b / space-l | xs / s / m / l / xl / xxl / xxxl | Внутренние отступы |
| indent-a / indent-h / indent-v / indent-t / indent-r / indent-b / indent-l | xs / s / m / l / xl / xxl / xxxl | Внешние отступы |



### __label

| Модификатор | Значение                     | Описание                                   |  
| ----------- | ---------------------------- | ------------------------------------------ |
| width       | default / inverse            | Ширина                                     |




