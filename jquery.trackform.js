/*
* jquery.trackform.js - A jQuery plugin to track if initial form values have changed
* Version: 0.0.1
* (c) 2015 Erik Montes
* MIT license
*/

$(function () {

    $.fn.trackFrom = function(options) {

        // default settings:
        var defaults = {
            customClassName: 'form-tracker'
        };

        var settings = $.extend({}, defaults, options);

        var data = [];
        var dirtyInputs = [];
        var isDirty = false;

        // Only track inputs with the specified class that are not hidden
        $('textarea' + '.' + customClassName + ', input' + '.' + customClassName).not(':hidden').each(function(i) {
            
            var $this = $(this);

            // Save initial value
            data[i] = $this.val();

            // Add an ID to track independently
            $this.data(customClassName +'-id', i);

            // Not dirty by default
            dirtyInputs[i] = false;

        }).change(function () {

            var $this = $(this);
            var id = $this.data(customClassName +'-id');

            // Check if value differs from initial value
            if (data[id] !== $this.val()) {
                dirtyInputs[id] = true;
            } else {
                dirtyInputs[id] = false;
            }

            // Determine if the form is dirty
            if ($.inArray(true, dirtyInputs) !== -1) {

                isDirty = true;

                window.onbeforeunload = function () {
                    return 'Are you sure you want to leave without saving?';
                };

            } else {

                isDirty = false;

                window.onbeforeunload = null;
            }
        });

    };

});