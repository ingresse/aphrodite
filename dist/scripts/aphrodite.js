"use strict";angular.module("aphrodite",["ngAnimate","duScroll","angular-click-outside"]),function(){angular.module("aphrodite").run(["$templateCache",function(e){e.put("directives/AlertDirectiveTemplate.html",'<div class="aph alert {{ \'alert--\' + alertOptions.color }}" data-ng-class="{\n        \'alert--dismissable\': !alertOptions.notDismiss\n     }" data-ng-show="alertVisibility"> <button class="aph alert__dismiss" data-ng-if="!alertOptions.notDismiss" data-ng-click="dismiss()"> </button> <div data-ng-transclude></div> </div> '),e.put("directives/LoaderDirectiveTemplate.html",'<div class="aph loader" data-ng-hide="activities.length === 0 && errors.length === 0"> <div class="aph loader__content"> <div class="aph container"> <div class="aph loader__content__spinner" data-ng-show="activities.length !== 0"> <span class="aph loader__content__spinner__image"> </span> </div> <div class="aph loader__content__message" data-ng-repeat="activity in activities track by $index"> <div data-ng-if="!activity.title && !activity.text" data-ng-bind-html="activity | unsafe"> </div> <div class="aph loader__content__message__title" data-ng-if="activity.title" data-ng-bind-html="activity.title | unsafe"> </div> <div class="aph loader__content__message__text" data-ng-if="activity.text" data-ng-bind-html="activity.text | unsafe"> </div> </div> <div class="aph loader__content__error" data-ng-repeat="error in errors track by $index"> <div data-ng-bind-html="error | unsafe"></div> <button class="aph loader__content__error__icon" data-ng-click="clearError(error)" title="Fechar esta mensagem"> × </button> </div> </div> </div> </div> '),e.put("directives/OverlayDirectiveTemplate.html",'<div class="aph overlay" data-ng-show="overlay.visibility"> <div class="aph overlay__content"> <div class="aph container"> <div class="aph alert"> <div class="aph overlay__content__title" data-ng-if="overlay.title"> {{ overlay.title }} </div> <div class="aph overlay__content__text" data-ng-if="overlay.text"> {{ overlay.text }} </div> <div class="aph overlay__content__actions"> <button class="aph overlay__content__actions__button" data-ng-click="continueCallback()" data-ng-if="!hideContinue"> {{ overlay.continueText }} </button> <button class="aph overlay__content__actions__button" data-ng-click="cancelCallback()"> {{ overlay.cancelText }} </button> </div> </div> </div> </div> </div> '),e.put("directives/ProgressBarDirectiveTemplate.html",'<span class="aph progress__label" data-ng-if="progressOptions.text"> {{ progressValue }}% </span> <div class="aph progress__bar progress__bar--{{ progressValue }}"> <span class="aph progress__bar__label" data-ng-if="progressOptions.text"> {{ progressValue }}% </span> </div> '),e.put("directives/SelectorDirectiveTemplate.html",'<div data-ng-if="!array"> <input type="checkbox" class="aph selector__input" id="selector-{{ randomId }}" name="{{ name }}" data-ng-model="$parent.ngModel" data-ng-attr-value="{{ value || undefined }}" data-ng-required="ngRequired" data-ng-checked="isChecked" data-is-checked="{{ isChecked }}" data-ng-disabled="ngDisabled"> <label for="selector-{{ randomId }}" class="aph selector__label"> <span class="aph selector__label__prefix" data-ng-if="prefix"> {{ prefix }} </span> {{ title }} </label> </div> <div data-ng-if="array"> <input type="checkbox" class="aph selector__input" id="selector-array-{{ randomId }}" name="{{ name }}" data-ng-value="{{ value }}" data-ng-click="checkArray()" data-ng-checked="isChecked" data-is-checked="{{ isChecked }}" data-ng-disabled="ngDisabled"> <label for="selector-array-{{ randomId }}" class="aph selector__label"> <span class="aph selector__label__prefix" data-ng-if="prefix"> {{ prefix }} </span> {{ title }} </label> </div> '),e.put("directives/TooltipDirectiveTemplate.html",'<div data-ng-transclude></div> <div class="tooltip__content" data-ng-class="[tooltipColor, tooltipPosition, tooltipSize]" data-ng-bind-html="content | unsafe"> </div> ')}])}(),angular.module("aphrodite").factory("loader",function(){var e={activities:[],errors:[]};return e.start=function(t){if(e.activities.indexOf(t)===-1)return e.activities.push(t),!0},e.stop=function(t){for(var a in e.activities)e.activities[a]===t&&e.activities.splice(a,1)},e.error=function(t,a){e.errors.push(t),a&&console.error(a)},e.clearError=function(t){for(var a in e.errors)e.errors[a]===t&&e.errors.splice(a,1)},e}),angular.module("aphrodite").factory("Overlay",["$rootScope","$document","$compile",function(e,t,a){var i=function(i){var r,n=e.$new(),o=t.find("body");return this.defaultProperties={visibility:!0,title:"Warning!",text:"This is an important update.",cancel:angular.noop,cancelText:"Undo","continue":angular.noop,continueText:"Understood, continue please"},n.properties=angular.extend(this.defaultProperties,i),r=angular.element('<overlay data-overlay="properties"></overlay>'),r=a(r)(n),o.append(r),this};return{create:i}}]),angular.module("aphrodite").factory("scroll",["$document",function(e){var t={};return t.toTop=function(t,a){var i=t||0,r=a||800,n=e.find("body");n.scrollTop(i,r).then(function(){window.scrollTo(0,i)})},t}]),angular.module("aphrodite").filter("unsafe",["$sce",function(e){return function(t){return e.trustAsHtml(t)}}]),angular.module("aphrodite").directive("alert",function(){return{restrict:"E",scope:{alertVisibility:"=",alertOptions:"=?"},templateUrl:"directives/AlertDirectiveTemplate.html",transclude:!0,link:function(e,t){t.addClass("aph alert-container"),e.dismiss=function(){e.alertVisibility=!e.alertVisibility}}}}),angular.module("aphrodite").directive("drawer",function(){return{restrict:"A",link:function(e,t,a){var i=angular.element(document.querySelector("#"+a.drawer));return a.drawer?0===i.length?void console.error("VENUS DRAWER DIRECTIVE:\nCan't find \"#"+a.drawer+'" content element.'):(e.closeDrawer=function(){i.removeClass("active")},t.on("click",function(){t[0].checked?i.removeClass("active"):i.addClass("active")}),void e.closeDrawer()):void console.error('VENUS DRAWER DIRECTIVE:\nNeed to declare "drawer" attribute with id of content element.')}}}),angular.module("aphrodite").directive("dropdown",function(){return{restrict:"A",link:function(e,t){t.on("click",function(){t.toggleClass("active")}),e.closeDropdown=function(){t.removeClass("active")}}}}),angular.module("aphrodite").directive("loader",["loader",function(e){return{restrict:"E",templateUrl:"directives/LoaderDirectiveTemplate.html",scope:{},link:function(t){t.activities=e.activities,t.errors=e.errors,t.clearError=function(t){e.clearError(t)}}}}]),angular.module("aphrodite").directive("overlay",["$document","$timeout",function(e,t){return{restrict:"E",transclude:!0,scope:{overlay:"="},templateUrl:"directives/OverlayDirectiveTemplate.html",link:function(a,i){var r=e.find("body");r.toggleClass("aph overlay-active");var n=function(){a.overlay.visibility=!1,r.toggleClass("aph overlay-active"),t(function(){i.remove(),a.overlay.visibility=!0},1e3)};a.cancelCallback=function(){a.overlay.cancel(),n()},a.continueCallback=function(){a.overlay["continue"](),n()}}}}]),angular.module("aphrodite").directive("progressBar",function(){return{restrict:"EA",scope:{progressValue:"=",progressOptions:"=?"},link:function(e,t){t.addClass("aph progress"),e.progressOptions&&e.progressOptions.size&&t.addClass("progress--"+e.progressOptions.size.toString())},templateUrl:"directives/ProgressBarDirectiveTemplate.html"}}),angular.module("aphrodite").directive("selector",function(){return{restrict:"E",scope:{title:"@",value:"=?",prefix:"@?",name:"@?",array:"=?",ngModel:"=?",ngTrueValue:"=?",ngFalseValue:"=?",ngRequired:"=?",ngDisabled:"=?"},templateUrl:"directives/SelectorDirectiveTemplate.html",link:function(e,t){if(e.randomId=Math.random(),t.addClass("aph selector"),e.array){var a;e.checkArray=function(){a=e.array.indexOf(e.value),a>-1?e.array.splice(a,1):e.array.push(e.value)},e.itemChecked=function(){return a=e.array.indexOf(e.value),a>-1?void(e.isChecked=!0):void(e.isChecked=!1)},e.$watch("array",function(){e.itemChecked()},!0)}}}}),angular.module("aphrodite").directive("tooltip",function(){return{restrict:"A",transclude:!0,templateUrl:"directives/TooltipDirectiveTemplate.html",scope:{tooltipOptions:"="},link:{pre:function(e,t,a){e.content=a.tooltip,e.options=e.tooltipOptions,e.tooltipColor=e.options&&e.options.color?"tooltip__content--"+e.options.color:"",e.tooltipPosition=e.options&&e.options.position?"tooltip__content--"+e.options.position:"",e.tooltipSize=e.options&&e.options.size?"tooltip__content--"+e.options.size:"",t.addClass("tooltip")}}}}),angular.module("aphrodite").directive("formValidation",["$window","scroll",function(e,t){return{restrict:"A",require:"^form",scope:{formValidationOffsetTop:"=?",formValidationNoScroll:"=?"},link:function(a,i,r,n){function o(){n.changed||(console.info("APH FORM VALIDATION:\nForm marked as CHANGED.\n\n"),n.changed=!0)}function l(e){if(!n[e.srcElement.name].$dirty)return console.info('APH FORM VALIDATION:\nElement "'+e.srcElement.name+'" marked as DIRTY.\n\n'),n[e.srcElement.name].$setDirty()}function s(t){var a=e.innerWidth>1024?90:170,i=t.offsetParent.offsetTop+t.offsetTop-a;return i}function c(e){for(var t=0;t<e.length;t++){var a=e[t];if(t===e.length)return;if(angular.isObject(a)&&!angular.isArray(a)){var i=angular.element(a);(i[0].type&&p.indexOf(i[0].type)===-1||v.indexOf(i[0].tagName)>-1)&&(i.on("keypress",o),i.on("change",o),i.on("focus",l))}}}function d(e,i){for(var r=0;r<e.length;r++){var n=e[r];if(angular.isObject(n)&&!angular.isArray(n)){var o=angular.element(n);if(o.hasClass("ng-invalid-required")||o.hasClass("ng-invalid-email")||o.hasClass("ng-invalid-email-remove"))return a.formValidationNoScroll||t.toTop(s(n)),n.focus(),i.preventDefault()}}}function u(){var e=i[0];n.changed=!1,c(e),i.on("submit",function(t){d(e,t)}),i.addClass("form--validation")}if(!r.formValidation)return console.error('APH FORM VALIDATION ERROR:\nNeed to declare the attribute "name" and send as param.\nExample:\n<form name="myForm" data-form-validation="myForm"></form>');var p=["submit","reset","button","file","range"],v=["TEXTAREA","SELECT"];u()}}}]),angular.module("aphrodite").directive("formNumericInput",function(){return{restrict:"A",require:"ngModel",link:function(e,t){t.on("keypress",function(e){var t=e.which?e.which:e.keyCode;return!(t>=48&&t<=57||13===t||8===t)&&e.preventDefault()})}}});.overlay.visibility = false;

                body.toggleClass('aph overlay-active');

                $timeout(function () {
                    element.remove();
                    scope.overlay.visibility = true;
                }, 1000);
            };

            scope.cancelCallback = function () {
                scope.overlay.cancel();

                destroyOverlay();
            };

            scope.continueCallback = function () {
                scope.overlay.continue();

                destroyOverlay();
            };
        }
    };
}]);

'use strict';

angular.module('aphrodite')
.directive('progressBar', function () {
    return {
        restrict: 'EA',
        scope   : {
            progressValue  : '=',
            progressOptions: '=?'
        },
        link    : function (scope, element) {
            element.addClass('aph progress');

            if (scope.progressOptions && scope.progressOptions.size) {
                element.addClass('progress--' + scope.progressOptions.size.toString());
            }
        },
        templateUrl: 'directives/ProgressBarDirectiveTemplate.html'
    };
});

'use strict';

angular.module('aphrodite')
.directive('selector', function () {
    return {
        restrict: 'E',
        scope   : {
            title       : '@',
            value       : '=?',
            prefix      : '@?',
            name        : '@?',
            array       : '=?',
            ngModel     : '=?',
            ngTrueValue : '=?',
            ngFalseValue: '=?',
            ngRequired  : '=?',
            ngDisabled  : '=?',
        },
        templateUrl: 'directives/SelectorDirectiveTemplate.html',
        link: function (scope, element) {
            scope.randomId = Math.random();

            element.addClass('aph selector');

            if (scope.array) {
                var index;

                scope.checkArray = function () {
                    index = scope.array.indexOf(scope.value);

                    if (index > -1) {
                        scope.array.splice(index, 1);

                    } else {
                        scope.array.push(scope.value);
                    }
                };

                scope.itemChecked = function () {
                    index = scope.array.indexOf(scope.value);

                    if (index > -1) {
                        scope.isChecked = true;

                        return;
                    }

                    scope.isChecked = false;
                };

                scope.$watch('array', function () {
                    scope.itemChecked();
                }, true);
            }
        },
    };
});

'use strict';

angular.module('aphrodite')
.directive('tooltip', function () {
    return {
        restrict   : 'A',
        transclude : true,
        templateUrl: 'directives/TooltipDirectiveTemplate.html',
        scope      : {
            tooltipOptions: '='
        },
        link       : {
            pre: function (scope, element, attrs) {
                scope.content = attrs.tooltip;
                scope.options = scope.tooltipOptions;

                scope.tooltipColor = (scope.options && scope.options.color) ?
                    'tooltip__content--' + scope.options.color : '';
                scope.tooltipPosition = (scope.options && scope.options.position) ?
                    'tooltip__content--' + scope.options.position : '';
                scope.tooltipSize = (scope.options && scope.options.size) ?
                    'tooltip__content--' + scope.options.size : '';

                element.addClass('tooltip');
            }
        }
    };
});

'use strict';

angular.module('aphrodite')
.directive('formValidation', ["$window", "scroll", function ($window, scroll) {
    return {
        restrict: 'A',
        require : '^form',
        scope   : {
            formValidationOffsetTop: '=?',
            formValidationNoScroll : '=?',
        },
        link    : function (scope, element, attrs, formController) {
            if (!attrs.formValidation) {
                return console.error(
                    'APH FORM VALIDATION ERROR:\n' +
                    'Need to declare the attribute "name" and send as param.\n' +
                    'Example:\n' +
                    '<form name="myForm" data-form-validation="myForm"></form>'
                );
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

                console.info(
                    'APH FORM VALIDATION:\nForm marked as CHANGED.\n\n'
                );

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
}]);

'use strict';

angular.module('aphrodite')
.directive('formNumericInput', function () {
    return {
        restrict: 'A',
        require : 'ngModel',
        link    : function (scope, element) {
            element.on('keypress', function (event) {
                var charCode = (event.which) ? event.which : event.keyCode;

                if (charCode >= 48 && charCode <= 57 ||
                    charCode === 13 || charCode === 8) {
                    return false;
                }

                return event.preventDefault();
            });
        }
    };
});
