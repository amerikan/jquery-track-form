# jquery-trackform.js
A jQuery plugin to track if form values have changed

## Usage

```html

<input value="hello" class="track-form" />

<textarea class="track-form">yo!</textarea>

```

```js
$(function () {

  $('input, textarea').trackForm();

});
```

