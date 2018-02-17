# Surface
Pattern for modal blocks. Should have the ID.

## Modificators

### pt-surface
| name        | value           | description                      |
| ----------- | --------------- | -------------------------------- |
| view        | tone / default  | color of background with opacity |


### __window
Child for align content in center.

### __content
Child for content. Contains close button.

| name                             | value                             | description         |
| -------------------------------- | --------------------------------- | ------------------- |
| size                             | xs / s / m / full                 | block width         |
| view                             | default / inverse                 | block background    |
| space-a / -v / -h / -b / -l / -r | s / m / l / xl                    | paddings            |
| space-t                          | s / m / l / xl / xxl / xxxl / 4xl | top padding         |


### __close
Button for closing surface. Contains any content.

| name | value            | description                         |
| ---- | ---------------- | ----------------------------------- |
| view | desktop / mobile | size of clickable area around block |


### __action
This child mix for open button with data-name on page.


## Example

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
