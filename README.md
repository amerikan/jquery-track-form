# jquery-trackform.js
A jQuery plugin to track if the initial form values have changed

## Demo
[Demo here](http://amerikan.github.io/jquery-track-form/)

Currently it supports:
- [x] `<textarea />`
- [x] `<input type="text" />`
- [x] `<input type="radio" />`
- [x] `<input type="checkbox" />`
- [x] `<select>`

## Usage

```html
	<form>
		<input value="hello" />
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

Sometimes you'll want certain anchors to ignore whether the form has changed or not. You can pass the selectors in `ignoreClicks` option as an Array.
```js
$(function () {
	$('form').trackForm(ignoreClicks: ['#some-anchor','.another-anchor']);
});

