# Блок тега
Используется для маркировки сущностей. Может служить в качестве фильтра.

## Пример
```
{
	block: 'pt-tag',
	mods: { size: 's', view: 'default' },
	content: [
	{
		elem: 'text',
		content: 'Классный тег'
	},
	{
		elem: 'delete',
		mix: { block: 'icon', mods: { 'delete-2': 's-ghost' } }
	}]
}
```

## Модификации
| Модификатор | Значение                     |
| ----------- | ---------------------------- |
| size        | s/m                          |
| view        | default/link/disable/inverse |
