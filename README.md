# jquery-trackform.js
A jQuery plugin to track if form values have changed

[Demo](http://amerikan.github.io/jquery-track-form/)

## Usage

In your HTML add an unique class to the form elements you would like to keep track for changes.
```html

	<input value="hello" class="track-form" />
	<textarea class="track-form">yo!</textarea>

```

In your javascript initialize by selecting 

```js
$(function () {
	
	// Track any element with the given class
	$('.track-form').trackForm();

	// or you can be specific to input/textarea elements
	$('input.track-form, textarea.track-form').trackForm();
});
```

