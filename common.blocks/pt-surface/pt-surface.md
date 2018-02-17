# «Сюрфейс»
Используется для представления перекрывающего слоя/модального блока

## Модификаторы

### pt-surface
| Модификатор | Значение        | Описание                         |
| ----------- | --------------- | -------------------------------- |
| view        | tone / default  | color of background with opacity |


### __window
Элемент для центрирования контентной части.

### __content
Элемент для контента. Содержит закрывающий контролл.

| Модификатор                      | Значение                          | Описание            |
| -------------------------------- | --------------------------------- | ------------------- |
| size                             | xs / s / m / full                 | block width         |
| view                             | default / inverse                 | block background    |
| space-a / -v / -h / -b / -l / -r | s / m / l / xl                    | paddings            |
| space-t                          | s / m / l / xl / xxl / xxxl / 4xl | top padding         |


### __close
Контролл для закрытия «сюрфейса». Может содержать любой контент (иконку). 

| Модификатор | Значение         | Описание                            |
| ----------- | ---------------- | ----------------------------------- |
| view        | desktop / mobile | size of clickable area around block |


### __action
Элемент примиксовывается к контроллу на странице с data-name атрибутом, для открытия «сюрфейса».


## Пример

```javascript
{
	block: 'link',
	attrs: { 'data-name': 'modal-1' },
	content: 'Open Modal'
}

{
	block: 'pt-surface',
	attrs: {
		id: 'modal-1'
	},
	mods: { view: 'soft' },
	content: [
		{
			elem: 'window',
			content: [
				{
					elem: 'content',
					elemMods: { size: 's', view: 'default', 'space-a': 'xl' },
					content: [
						{
							elem: 'close',
							content:
							{
								block: 'icon',
								mods: { close: 's-primary'}
							}
						},
						{
							/* content */
						}
					]
				}
			]
		}
	]
}
```
