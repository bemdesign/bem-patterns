```javascript
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
					elemMods: { size: '1' },
					content: [
						{
							elem: 'close',
						content: [
							{
								block: 'icon',
								mods: { close: 's-primary'}
							}
						]
						},
					/* Контент */
					{
						content: 'Первая модалка'
					}
					]
				}
			]
		}
	]
},

{
block: 'pt-surface',
	attrs: {
		id: 'modal-2'
	},
	mods: { view: 'soft' },
	content: [
		{
			elem: 'window',
			content: [
				{
					elem: 'content',
					elemMods: { size: '1' },
					content: [
						{
							elem: 'close',
							content: [
								{
									block: 'icon',
									mods: { close: 's-primary'}
								}
							]
						},
						/* Контент */
						{
							content: 'Вторая модалка'
						}
					]
				}
			]
		}
	]
}
```