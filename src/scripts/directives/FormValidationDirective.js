'use strict';

angular.module('aphrodite')
.directive('formValidation', function ($window, scroll) {
    return {
        restrict: 'A',
        require : '^form',
        scope   : {
            formValidationOffsetTop: '=?',
            formValidationNoScroll : '=?',
        },
        link    : function (scope, element, attrs, formController) {
            if (!attrs.formValidation) {
                return;
            }

            // Elements lists to listen or not
            var excludedInputs   = [
                'submit',
                'reset',
                'button',
                'file',
                'range'
            ];
            var includedElements = [
                'TEXTAREA',
                'SELECT'
            ];

            // Set form as changed
            function _setFormChanged () {
                if (formController.changed) {
                    return;
                }

                console.info('APH FORM VALIDATION:\nForm marked as CHANGED.\n\n');

                formController.changed = true;
            }

            // Set an element as dirty
            function _setElementDirty (evt) {
                if (formController[evt.srcElement.name].$dirty) {
                    return;
                }

                console.info(
                    'APH FORM VALIDATION:\nElement "' +
                    evt.srcElement.name +
                    '" marked as DIRTY.\n\n'
                );

                return formController[evt.srcElement.name].$setDirty();
            }

            // Get element offset top
            function _getElementOffsetTop (el) {
                var safeMargin =
                    ($window.innerWidth > 1024 ? 90 : 170);
                var yPosition  =
                    (el.offsetParent.offsetTop + el.offsetTop - safeMargin);

                return yPosition;
            }

            // Insert event listener in elements to mark form as changed
            function _childsListen (form) {
                for (var k = 0; k < form.length; k++) {
                    var field = form[k];

                    if (k === form.length) {
                        return;
                    }

                    if (angular.isObject(field) && !angular.isArray(field)) {
                        var fieldElement = angular.element(field);

                        if (fieldElement[0].type && excludedInputs.indexOf(fieldElement[0].type) === -1 ||
                            includedElements.indexOf(fieldElement[0].tagName) > -1) {

                            fieldElement.on('keypress', _setFormChanged);
                            fieldElement.on('change', _setFormChanged);
                            fieldElement.on('focus', _setElementDirty);

                        }

                    }
                }
            }

            // Verify fields
            function _validateFields (form, evt) {
                for (var j = 0; j < form.length; j++) {
                    var field = form[j]; // uses native 'focus'

                    if (angular.isObject(field) && !angular.isArray(field)) {
                        var fieldElement = angular.element(field); // uses angular resources

                        // In case of an invalid/required field
                        if (fieldElement.hasClass('ng-invalid-required') ||
                            fieldElement.hasClass('ng-invalid-email') ||
                            fieldElement.hasClass('ng-invalid-email-remove')) {

                            // Scroll page to the field position
                            if (!scope.formValidationNoScroll) {
                                scroll.toTop(
                                    _getElementOffsetTop(field)
                                );
                            }

                            // Apply focus in field
                            field.focus();

                            // prevent submit
                            return evt.preventDefault();
                        }
                    }
                }
            }

            // Initialize variables
            function _init () {
                var form = element[0];

                formController.changed = false;

                // Initialize listener in childs
                _childsListen(form);

                // Wait for submit
                element.on('submit', function (e) {

                    // Verify fields
                    _validateFields(form, e);

                });

                // Add css class to form
                element.addClass('form--validation');
            }

            // Initialize directive
            _init();
        },
    };
});
