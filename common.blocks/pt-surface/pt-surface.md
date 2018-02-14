# pt-surface
Блок предназначен для перекрывающих слоев/поверхностей. Он есть в двух модификациях, темной (паранджа) и светлая (молоко). Так же есть модификации на размер контентной области.

### pt-surcafe

| name        | value           | description                      |
| ----------- | --------------- | -------------------------------- |
| view        | tone / default  | color of background with opacity |


### __window

Элемент для центрального вырвнивания контента

### __content

Эдемен для размещения контента

| name                             | value                             | description         |
| -------------------------------- | --------------------------------- | ------------------- |
| size                             | xs / s / m / full                 | block width         |
| view                             | default / inverse                 | block background    |
| space-a / -v / -h / -b / -l / -r | s / m / l / xl                    | paddings            |
| space-t                          | s / m / l / xl / xxl / xxxl / 4xl | top padding         |


### __close

Кнопка для закрытия контента

| name | value            | description                         |
| ---- | ---------------- | ----------------------------------- |
| view | desktop / mobile | size of clickable area around block |


### __action

Элемент необходимый для открытия окна, примиксовывается к любой сущности с атрибутом data-name.

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
			}]
		}]
	}]
},
```
