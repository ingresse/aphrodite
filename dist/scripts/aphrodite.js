"use strict";angular.module("aphrodite",["ngAnimate","ngDialog","duScroll","angular-click-outside"]).config(["ngDialogProvider",function(e){e.setDefaults({className:"aph modal modal--limit",showClose:!1,plain:!1,trapFocus:!1,closeByDocument:!1,closeByEscape:!0})}]),function(){angular.module("aphrodite").run(["$templateCache",function(e){e.put("directives/AlertDirectiveTemplate.html",'<div class="aph alert {{ \'alert--\' + alertOptions.color }}" data-ng-class="{\n        \'alert--dismissable\': !alertOptions.notDismiss\n     }" data-ng-show="alertVisibility"> <button class="aph alert__dismiss" data-ng-if="!alertOptions.notDismiss" data-ng-click="dismiss()"> </button> <div data-ng-transclude></div> </div> '),e.put("directives/AutocompleteDirectiveTemplate.html",'<div class="aph autocomplete" id="autocomplete{{ id }}"> <input class="aph form__control" type="text" id="{{ id }}" name="{{ id }}" autocomplete="off" placeholder="{{ placeholder }}" data-ng-model="term" data-ng-focus="setFocus(true);" data-ng-required="required" data-ng-class="{ \'autocomplete__input\' : focused && list.length > 0 }" data-click-outside="setFocus(false);" data-outside-if-not="autocomplete"> <div class="aph autocomplete__list"> <div class="aph autocomplete__list__message" data-ng-if="loading && list.length === 0"> {{ textLoading || \'Buscando...\' }} </div> <div class="aph autocomplete__list__message" data-ng-if="notFound && !loading && list.length === 0"> {{ textNotFound || \'Nada encontrado\' }} </div> <div class="aph autocomplete__list__message text-red" data-ng-if="error"> {{ textError || \'Houve um erro na busca\' }} </div> <div data-ng-show="focused && list.length > 0"> <div data-ng-repeat="item in list track by $index"> <input class="aph autocomplete__list__radio" type="radio" name="autocompleItem{{ id }}" id="autocompleteItem{{ $index }}"> <label class="aph autocomplete__list__item" for="autocompleteItem{{ $index }}"> <div class="row middle-xs"> <div class="col-xs aph autocomplete__list__item__image" data-ng-if="itemImage"> <img class="aph autocomplete__list__item__pic" data-ng-src="{{ getItemPath(item, itemImage) }}"> </div> <div class="col-xs"> <div class="aph autocomplete__list__item__title" data-ng-bind-html="getItemPath(item, itemTitle) | unsafe"></div> <div class="aph autocomplete__list__item__description" data-ng-if="itemDescription" data-ng-bind-html="getItemPath(item, itemDescription) | unsafe"></div> </div> </div> </label> </div> </div> </div> </div> '),e.put("directives/IconsDefsDirectiveTemplate.html",'<svg class="aph ic-defs"> <defs> <g id="check-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M27.5 14c0 7.457-6.043 13.5-13.5 13.5S.5 21.457.5 14C.5 6.545 6.543.5 14 .5S27.5 6.545 27.5 14z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="1.5" d="M7.808 14.149l4.291 3.994 8.821-8.554"/> </g> <g id="close-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M27.5 14c0 7.456-6.046 13.5-13.5 13.5C6.541 27.5.5 21.456.5 14 .5 6.545 6.541.5 14 .5 21.454.5 27.5 6.546 27.5 14z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <g stroke-width="1.5"> <path d="M8.886 8.896l10.257 10.257L8.886 8.896zM8.886 19.153L19.143 8.896 8.886 19.153z"/> </g> </g> <g id="plus-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M23.546 23.547c-5.272 5.27-13.819 5.27-19.092 0-5.272-5.274-5.272-13.822 0-19.093 5.273-5.272 13.82-5.272 19.09 0 5.274 5.271 5.274 13.82.002 19.093z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <g stroke-width="1.5"> <path d="M6.755 13.866h14.506H6.755zM14.008 21.118V6.613v14.505z"/> </g> </g> <g id="minus-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M23.547 23.545c-5.273 5.273-13.821 5.273-19.093 0-5.273-5.27-5.271-13.819 0-19.092 5.272-5.27 13.82-5.27 19.092 0 5.271 5.273 5.272 13.821 0 19.092z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="1.5" d="M6.755 13.866h14.506H6.755z"/> </g> <g id="undo-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M23.547 23.547c-5.273 5.27-13.821 5.27-19.092 0-5.273-5.274-5.273-13.823 0-19.094 5.27-5.27 13.819-5.27 19.09 0 5.273 5.271 5.273 13.82.002 19.094z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="1.5" d="M11.106 16.942L7.48 19.064l-2.018-3.82m17 .65c-.867-2.223-2.66-4.023-5.027-4.736-4.106-1.231-8.383 1.27-9.553 5.59a8.468 8.468 0 0 0-.296 1.965"/> </g> <g id="arrow-up-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 1 28.5 1.5)"> <path d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z" id="a"/> <mask y="-1.5" x="-1.5" height="30" width="30" id="b"> <path d="M-1.5-1.5h30v30h-30z" fill="#fff"/> <use id="use10" xlink:href="#a"/> </mask> <use mask="url(#b)" stroke-width="2" xlink:href="#a"/> <path stroke-width="2" d="m 17.993999,15.743696 -4.495,-4.495 -4.4929997,4.495"/> </g> <g id="arrow-right-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1.5 1.5)"> <path id="a" d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="2" d="M12 17.988l4.495-4.495L12 9"/> </g> <g id="arrow-down-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 1 28.5 1.5)"> <path id="a" d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="2" d="m 9.006001,12.255031 4.495,4.495 4.493,-4.495"/> </g> <g id="arrow-left-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 1 28.5 1.5)"> <path id="a" d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="2" d="M12 17.988l4.495-4.495L12 9"/> </g> <g id="info-circle" fill="none" fill-rule="evenodd" transform="translate(1 1)"> <path id="a" d="M27 13.499c0 7.457-6.046 13.5-13.5 13.5-7.458 0-13.5-6.043-13.5-13.5C0 6.044 6.042 0 13.5 0 20.954 0 27 6.044 27 13.499z"/> <mask id="b" width="30" height="29.999" x="-1.5" y="-1.5"> <path d="M-1.5-1.5h30v29.999h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-linecap="round" stroke-linejoin="round" stroke-width="2" mask="url(#b)" xlink:href="#a"/> <g transform="matrix(1 0 0 -1 12 20)"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.5.5v8"/> <circle cx="1.5" cy="12" r="1"/> </g> </g> <g id="question-circle" fill="none" fill-rule="evenodd" transform="translate(1 1)"> <path id="a" d="M27 13.5c0 7.458-6.043 13.501-13.5 13.501C6.045 27.001 0 20.958 0 13.5 0 6.044 6.045 0 13.5 0 20.957 0 27 6.044 27 13.5z"/> <mask id="b" width="30" height="30.001" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30.001h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-linecap="round" stroke-linejoin="round" stroke-width="2" mask="url(#b)" xlink:href="#a"/> <g transform="translate(10 7)"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.041 9.715c0-.718-.185-1.031.39-1.55 1.18-1.068 3.596-2.319 3.596-4.437C7.027-.609.603-.217.603 3.042"/> <circle cx="3" cy="13" r="1"/> </g> </g> <g id="warning" fill="none" fill-rule="evenodd" transform="translate(1 1)"> <path id="a" d="M13.499 0L0 27.06h27z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30h-30z"/> <use xlink:href="#a"/> </mask> <use stroke="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" mask="url(#b)" xlink:href="#a"/> <g transform="translate(12 11)"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.5.5v8"/> <circle cx="1.5" cy="12" r="1"/> </g> </g> </defs> </svg> '),e.put("directives/LoaderDirectiveTemplate.html",'<div class="aph loader" data-ng-hide="activities.length === 0 && infos.length === 0 && errors.length === 0"> <div class="aph loader__content"> <div class="aph container"> <div class="aph loader__content__spinner" data-ng-show="activities.length !== 0"> <span class="aph loader__content__spinner__image"> </span> </div> <div class="aph loader__content__message" data-ng-repeat="activity in activities track by $index"> <div class="aph loader__content__message__title" data-ng-if="activity.title" data-ng-bind-html="activity.title | unsafe"> </div> <div class="aph loader__content__message__text" data-ng-if="activity.text" data-ng-bind-html="activity.text | unsafe"> </div> </div> <div class="aph loader__content__info" data-ng-repeat="info in infos track by $index"> <div data-ng-bind-html="info | unsafe"></div> <button class="aph loader__content__info__icon" data-ng-click="clearInfo(info)" title="Fechar esta mensagem"> × </button> </div> <div class="aph loader__content__error" data-ng-repeat="error in errors track by $index"> <div data-ng-bind-html="error | unsafe"></div> <button class="aph loader__content__error__icon" data-ng-click="clearError(error)" title="Fechar esta mensagem"> × </button> </div> </div> </div> </div> '),e.put("directives/PaginationDirectiveTemplate.html",'<ul class="aph pag"> <li class="aph pag__item pag__item--prev" data-ng-show="current > 1" data-ng-click="previous();" title="Página anterior">&lsaquo;</li> <li class="aph pag__item" data-ng-click="selector(1);" data-ng-show="2 < current - visibleHalf" title="Primeira página">1</li> <li class="aph pag__item pag__item--disabled" data-ng-show="2 < current - visibleHalf" title="Existem páginas entre o número anterior e o seguinte">...</li> <li class="aph pag__item" data-ng-class="{ \'pag__item--active\': page === current }" data-ng-repeat="page in getPages(last) track by $index" data-ng-click="goTo(page);" title="{{ page === current ? \'Você está nessa página\' : \'Ir para a página \' + page }}">{{ page }}</li> <li class="aph pag__item pag__item--disabled" data-ng-show="last > current + visibleHalf" title="Existem páginas entre o número anterior e o seguinte">...</li> <li class="aph pag__item" data-ng-click="selector(last);" data-ng-show="last > current + visibleHalf" title="Ir para a última página">{{ last }}</li> <li class="aph pag__item pag__item--next" data-ng-show="current < last" data-ng-click="next();" title="Próxima página">&rsaquo;</li> </ul> '),e.put("directives/ProgressBarDirectiveTemplate.html",'<span class="aph progress__label" data-ng-if="progressOptions.text"> {{ progressValue }}% </span> <div class="aph progress__bar progress__bar--{{ progressValue }}"> <span class="aph progress__bar__label" data-ng-if="progressOptions.text"> {{ progressValue }}% </span> </div> '),e.put("directives/SelectorDirectiveTemplate.html",'<div data-ng-if="!array"> <input type="checkbox" class="aph selector__input" id="selector-{{ randomId }}" name="{{ name }}" data-ng-model="$parent.ngModel" data-ng-attr-value="{{ value || undefined }}" data-ng-required="ngRequired" data-ng-checked="isChecked" data-is-checked="{{ isChecked }}" data-ng-disabled="ngDisabled"> <label for="selector-{{ randomId }}" class="aph selector__label"> <span class="aph selector__label__prefix" data-ng-if="prefix"> {{ prefix }} </span> {{ title }} </label> </div> <div data-ng-if="array"> <input type="checkbox" class="aph selector__input" id="selector-array-{{ randomId }}" name="{{ name }}" data-ng-value="{{ value }}" data-ng-click="checkArray()" data-ng-checked="isChecked" data-is-checked="{{ isChecked }}" data-ng-disabled="ngDisabled"> <label for="selector-array-{{ randomId }}" class="aph selector__label"> <span class="aph selector__label__prefix" data-ng-if="prefix"> {{ prefix }} </span> {{ title }} </label> </div> '),e.put("directives/TooltipDirectiveTemplate.html",'<div class="aph tooltip__content" data-ng-class="[tooltipColor, tooltipPosition, tooltipSize]" data-ng-bind-html="content | unsafe"> </div> ')}])}(),angular.module("aphrodite").factory("loader",["$timeout",function(e){var t={activities:[],infos:[],errors:[]};return t.start=function(a){var i=null,r={id:t.activities.length,dismiss:!1};angular.isObject(a)?angular.forEach(a,function(e,t){r[t]=a[t]}):r.title=a;for(var n=0;n<t.activities.length;n++)if(i=t.activities[n],r.title===i.title)return!1;return e(function(){r.dismiss=!0},1e4),t.activities.push(r),r},t.stop=function(e){for(var a=null,i=angular.isObject(e)?e.title:e,r=0;r<t.activities.length;r++)if(a=t.activities[r],!i&&!a.title||i===a.title)return void t.activities.splice(r,1)},t.info=function(e){t.infos.push(e)},t.error=function(e,a){t.errors.push(e),a&&console.error(a)},t.clearInfo=function(e){for(var a in t.infos)t.infos[a]===e&&t.infos.splice(a,1)},t.clearError=function(e){for(var a in t.errors)t.errors[a]===e&&t.errors.splice(a,1)},t}]),angular.module("aphrodite").factory("scroll",["$document",function(e){var t={};return t.toTop=function(t,a){var i=t||0,r=a||800,n=e.find("body");n.scrollTop(i,r).then(function(){window.scrollTo(0,i)})},t}]),angular.module("aphrodite").filter("unsafe",["$sce",function(e){return function(t){return e.trustAsHtml(t)}}]),angular.module("aphrodite").directive("aphAutocomplete",["$timeout",function(e){return{restrict:"E",replace:!0,scope:{term:"=?",change:"=",callback:"=",id:"@",itemTitle:"@",itemImage:"@?",itemDescription:"@?",placeholder:"@?",textLoading:"@?",textNotFound:"@?",textError:"@?",required:"=?",delay:"=?",clearOnCallback:"=?"},templateUrl:"directives/AutocompleteDirectiveTemplate.html",link:function(t,a){var i,r,n=!1,l=angular.element(a.find("input")[0]),o=angular.element(a.find("div")[0]);t.getItemPath=function(e,t){if(!e||!t)return null;t=t.split(".");for(var a=0;a<t.length;a++)e=e[t[a]];return e},t.search=function(){t.error=!1,t.notFound=!1,t.loading=!0,t.change(t.term).then(function(e){t.list=e})["catch"](function(){t.error=!0,t.list=[]})["finally"](function(){t.loading=!1,t.notFound=0===t.list.length})},t.selectItem=function(e){r=t.list[e],t.list=[],t.clearOnCallback?l[0].value="":l[0].value=t.getItemPath(r,t.itemTitle),t.setFocus(),t.callback(r),t.$digest()},t.setFocus=function(e){return e?void(t.focused=!0):void(t.focused=!1)},l.on("keyup",function(e){i=a.find("input")[1],i&&40===e.keyCode&&t.list.length>0&&(i.checked=!0,i.focus())}),o.on("keypress mousedown",function(a){13!==a.which&&"mousedown"!==a.type||(a.preventDefault(),e(function(){var e=[];angular.extend(e,o.find("input")),e.some(function(e,a){if(e.checked)return t.selectItem(a),!0}),t.$digest()},150))}),t.$watch("term",function(a){!n&&a||(t.notFound=!1,e.cancel(n)),a&&a.length>=2?n=e(function(){t.search()},t.delay||1e3):t.list=[]})}}}]),angular.module("aphrodite").directive("alert",function(){return{restrict:"E",scope:{alertVisibility:"=",alertOptions:"=?"},templateUrl:"directives/AlertDirectiveTemplate.html",transclude:!0,link:function(e,t){t.addClass("aph alert-container"),e.dismiss=function(){e.alertVisibility=!e.alertVisibility}}}}),angular.module("aphrodite").directive("drawer",function(){return{restrict:"A",link:function(e,t,a){var i=angular.element(document.querySelector("#"+a.drawer));return a.drawer?0===i.length?void console.error("APH DRAWER DIRECTIVE:\nCan't find \"#"+a.drawer+'" content element.'):(e.closeDrawer=function(){i.removeClass("active")},t.on("click",function(){t[0].checked?i.removeClass("active"):i.addClass("active")}),void e.closeDrawer()):void console.error('APH DRAWER DIRECTIVE:\nNeed to declare "drawer" attribute with id of content element.')}}}),angular.module("aphrodite").directive("dropdown",function(){return{restrict:"A",link:function(e,t){t.on("click",function(){t.toggleClass("active")}),e.closeDropdown=function(){t.removeClass("active")}}}}),angular.module("aphrodite").directive("formValidation",["$window","scroll",function(e,t){return{restrict:"A",require:"^form",scope:{formValidationOffsetTop:"=?",formValidationNoScroll:"=?"},link:function(a,i,r,n){function l(){n.changed||(console.info("APH FORM VALIDATION:\nForm marked as CHANGED.\n\n"),n.changed=!0)}function o(e){if(!n[e.srcElement.name].$dirty)return console.info('APH FORM VALIDATION:\nElement "'+e.srcElement.name+'" marked as DIRTY.\n\n'),n[e.srcElement.name].$setDirty()}function s(t){var a=e.innerWidth>1024?90:170,i=t.offsetParent.offsetTop+t.offsetTop-a;return i}function d(e){for(var t=0;t<e.length;t++){var a=e[t];if(t===e.length)return;if(angular.isObject(a)&&!angular.isArray(a)){var i=angular.element(a);(i[0].type&&p.indexOf(i[0].type)===-1||h.indexOf(i[0].tagName)>-1)&&(i.on("keypress",l),i.on("change",l),i.on("focus",o))}}}function c(e,i){for(var r=0;r<e.length;r++){var n=e[r];if(angular.isObject(n)&&!angular.isArray(n)){var l=angular.element(n);if(l.hasClass("ng-invalid-required")||l.hasClass("ng-invalid-email")||l.hasClass("ng-invalid-email-remove"))return a.formValidationNoScroll||t.toTop(s(n)),n.focus(),i.preventDefault()}}}function u(){var e=i[0];n.changed=!1,d(e),i.on("submit",function(t){c(e,t)}),i.addClass("form--validation")}if(r.formValidation){var p=["submit","reset","button","file","range"],h=["TEXTAREA","SELECT"];u()}}}}]),angular.module("aphrodite").directive("iconDefs",function(){return{restrict:"E",replace:!0,templateUrl:"directives/IconsDefsDirectiveTemplate.html"}}),angular.module("aphrodite").directive("icon",function(){return{restrict:"E",replace:!0,scope:{title:"@",size:"@?"},link:function(e){e.iconId="#"+e.title},template:'<svg viewBox="0 0 30 30" class="aph ic">    <use data-ng-if="title && iconId" xlink:href="{{ iconId }}"></use></svg>'}}),angular.module("aphrodite").directive("imageBlur",function(){return{restrict:"E",scope:{backgroundImage:"="},link:function(e,t){t.addClass("aph image-blur"),e.$watch("backgroundImage",function(){t.css("background-image",'url("'+e.backgroundImage+'")')})}}}),angular.module("aphrodite").directive("loader",["loader",function(e){return{restrict:"E",templateUrl:"directives/LoaderDirectiveTemplate.html",scope:{},link:function(t){t.activities=e.activities,t.infos=e.infos,t.errors=e.errors,t.stop=function(t){e.stop(t)},t.clearInfo=function(t){e.clearInfo(t)},t.clearError=function(t){e.clearError(t)}}}}]),angular.module("aphrodite").directive("progressBar",function(){return{restrict:"EA",scope:{progressValue:"=",progressOptions:"=?"},link:function(e,t){t.addClass("aph progress"),e.progressOptions&&e.progressOptions.size&&t.addClass("progress--"+e.progressOptions.size.toString())},templateUrl:"directives/ProgressBarDirectiveTemplate.html"}}),angular.module("aphrodite").directive("selector",function(){return{restrict:"E",scope:{title:"@",value:"=?",prefix:"@?",name:"@?",array:"=?",ngModel:"=?",ngTrueValue:"=?",ngFalseValue:"=?",ngRequired:"=?",ngDisabled:"=?"},templateUrl:"directives/SelectorDirectiveTemplate.html",link:function(e,t){if(e.randomId=Math.random(),t.addClass("aph selector"),e.array){var a;e.checkArray=function(){a=e.array.indexOf(e.value),a>-1?e.array.splice(a,1):e.array.push(e.value)},e.itemChecked=function(){return a=e.array.indexOf(e.value),a>-1?void(e.isChecked=!0):void(e.isChecked=!1)},e.$watch("array",function(){e.itemChecked()},!0)}}}}),angular.module("aphrodite").directive("tooltip",["$document","$compile","$filter",function(e,t,a){return{restrict:"A",scope:!0,link:function(e,i,r){e.text=a("unsafe")(r.tooltip);var n=t('<span class="aph tooltip__content" data-ng-bind-html="text"></span>')(e);i.addClass("aph tooltip"),r.tooltipClass&&n.addClass(r.tooltipClass),i.append(n)}}}]);