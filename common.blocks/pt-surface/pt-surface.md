# PT-SURFACE
Pattern for modal blocks. Should have the ID.

## MODIFICATORS
| name        | value           | description                      |
| ----------- | --------------- | -------------------------------- |
| view        | tone / default  | color of background with opacity |


## CHILDS

### Window
Child for align content in center.

### Content
Child for content. Contains close button.

#### Modificators

| name                             | value                             | description         |
| -------------------------------- | --------------------------------- | ------------------- |
| size                             | xs / s / m / full                 | block width         |
| view                             | default / inverse                 | block background    |
| space-a / -v / -h / -b / -l / -r | s / m / l / xl                    | paddings            |
| space-t                          | s / m / l / xl / xxl / xxxl / 4xl | top padding         |


### Close
Button for closing surface. Contains any content.

#### Modificators

| name | value            | description                         |
| ---- | ---------------- | ----------------------------------- |
| view | desktop / mobile | size of clickable area around block |


### Action
This child mix for open button with data-name on page.


## EXAMPLE

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