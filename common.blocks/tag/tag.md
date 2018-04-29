# Тэг
Используется для маркировки сущностей. Может служить в качестве фильтра. В отличии от бейджа тэг не отображает статус, а отвечает за категоризацию информации.

## Модификации

### tag

| Модификатор | Значение                     |
| ----------- | ---------------------------- |
| size        | s/m                          |
| view        | default/link/disable/inverse |


## Пример
```javascript
{
	block: 'tag',
	mods: { size: 's', view: 'default' },
	content: [
		{
			elem: 'text',
			content: 'Классный тег'
		},
		{
			elem: 'delete',
			mix: { block: 'icon', mods: { 'delete-2': 's-ghost' } }
		}
	]
}
```


