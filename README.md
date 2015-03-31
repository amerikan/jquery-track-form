# jquery-trackform.js
A jQuery plugin to track if form values have changed

[Demo](http://amerikan.github.io/jquery-track-form/)

Currently it supports:
- [x] `<textarea />`
- [x] `<input type="text" />`
- [ ] `<input type="radio" />`
- [ ] `<input type="checkbox" />`

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

