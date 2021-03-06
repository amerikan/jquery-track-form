/*
* jquery.trackform.js - A jQuery plugin to track if initial form values have changed
* (c) 2015 Erik Montes
* MIT license
*/

$(function () {

    $.fn.trackForm = function() {

        var data = [];
        var dirtyInputs = [];
        var isDirty = false;

        // Only track inputs with the specified class that are not hidden
        return this.each(function (i) {
            
            var $this = $(this);

            // Save initial input value
            data[i] = $this.val();

            // Add an ID to track independently
            $this.data('trackform-id', i);

            // Input not dirty by default
            dirtyInputs[i] = false;

        }).change(function () {

            var $this = $(this);
            var id = $this.data('trackform-id');

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
                    return 'Are you sure you want to leave without saving the changes?';
                };

            } else {

                isDirty = false;

                window.onbeforeunload = null;
            }
        });

    };

});