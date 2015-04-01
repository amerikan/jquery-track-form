# jquery-trackform.js
A smart jQuery plugin that prompts the user with a warning before leaving the page when the **initial** form values have changed.

**Requires jQuery 1.7++**

## Demo
[Demo here](http://amerikan.github.io/jquery-track-form/)

## Usage

```html
	<form>
		<input type="text" value="hello" />
		<input type="radio" name="fruit" value="cherry" /> Cherry
		<input type="radio" name="fruit" value="blueberry" /> Blueberry
		<input type="checkbox" value="happy" checked="checked" /> Happy
		<textarea>yo what's up!</textarea>
		<input type="submit" value="submit" />
	</form>

```

In your javascript initialize by selecting the form container

```js
$(function () {
	$('form').trackForm();
});
```

## Advanced Usage

Sometimes you'll want certain anchors to be ignored when clicked whether the initial form values have changed or not. You can pass the selectors to be ignored in `ignoreClicks` option as an Array.
```js
$(function () {
	$('form').trackForm(ignoreClicks: ['#some-anchor','.another-anchor']);
});
```

## Support

Currently it tracks the following for changes:
- [x] `<textarea />`
- [x] `<input type="text" />`
- [x] `<input type="radio" />`
- [x] `<input type="checkbox" />`
- [x] `<select>`

### Browser support:

Firefox    | Chrome     | IE         | Safari     | iOS Safari | Opera      | Opera Mini
:--------: | :--------: | :--------: | :--------: | :--------: | :--------: | :--------:
:white_check_mark: | :white_check_mark: | ? | :white_check_mark: | :x: `*` | ? | ? 

`*` plugin uses `beforeunload` event which is not supported by iOS
